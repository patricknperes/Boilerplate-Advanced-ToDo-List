import React, { useCallback, useContext, useMemo } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import { todoApi } from '../../api/todoApi';
import { ITodo } from '../../api/todoSch';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';
import TodoWelcomeView from './todoWelcomeView';
import { ISchema } from '/imports/typings/ISchema';
import { dialogSx } from '../todoList/todoListStyles';
import TodoDetailController from '../todoDetail/todoDetailContoller';
import { IMeteorError } from '/imports/typings/IMeteorError';
import { TodoListControllerContext } from '../todoList/todoListController';
import { userprofileServerApi } from '/imports/modules/userprofile/api/userProfileServerApi';
import { IUserProfile } from '/imports/modules/userprofile/api/userProfileSch';
import { userprofileApi } from '/imports/modules/userprofile/api/userProfileApi';

interface ItodoWelcomeControllerContext {
	tasks: ITodo[];
	loading: boolean;
	schema: ISchema<any>;
	handleViewAllTasks: () => void;
	handleTaskStatusChange: (task: ITodo, checked: boolean) => void;
	onViewClick: (id: string) => void;
	onEditButtonClick: (id: string) => void;
	onDeleteButtonClick: (row: any) => void;
	currentUser: string | null;
	userLoading: boolean;
}

export const todoWelcomeControllerContext = React.createContext<ItodoWelcomeControllerContext>(
	{} as ItodoWelcomeControllerContext
);

const todoWelcomeController = () => {
	const navigate = useNavigate();
	const { showDialog } = useContext<IAppLayoutContext>(AppLayoutContext);

	const { tasks, loading } = useTracker(() => {
		const userId = Meteor.userId();
		const filter = {
			$or: [{ createdby: userId }, { visibilidade: 'public' }]
		};
		const sort = { createdat: -1 };
		const subHandle = todoApi.subscribe('todoList', filter, { sort, limit: 5 });
		const tasks = subHandle?.ready() ? todoApi.find(filter, { sort, limit: 5 }).fetch() : [];
		return {
			tasks,
			loading: !!subHandle && !subHandle.ready()
		};
	}, [Meteor.userId()]);

	const { currentUser, userLoading } = useTracker(() => {
		const userId = Meteor.userId();
		if (!userId) {
			return { currentUser: null, userLoading: false };
		}

		const subHandle = Meteor.subscribe('userprofile-profile');
		const userSubHandle = userprofileApi.subscribe('getLoggedUserProfile');

		const user = userSubHandle?.ready() ? userprofileApi.findOne({ _id: userId }) : null;

		return {
			currentUser: user?.username,
			userLoading: !userSubHandle?.ready()
		};
	}, [Meteor.userId()]);

	console.log('currentUser', currentUser);

	const handleViewAllTasks = useCallback(() => {
		navigate('/todo');
	}, [navigate]);

	const onEditButtonClick = useCallback((taskId: string) => {
		showDialog({
			sx: dialogSx,
			children: <TodoDetailController id={taskId} mode="edit" />
		});
	}, []);

	const onViewClick = useCallback((taskId: string) => {
		showDialog({
			sx: dialogSx,
			children: <TodoDetailController id={taskId} mode="view" />
		});
	}, []);

	const onDeleteButtonClick = useCallback((row: any) => {
		todoApi.remove(row);
	}, []);

	const handleTaskStatusChange = useCallback((task: ITodo, checked: boolean) => {
		if (task) {
			todoApi.update(task, (e: IMeteorError) => {
				if (!e) {
					console.log(`Task updated successfully!`);
				} else {
					console.error(`Error updating task: ${e.reason}`);
				}
			});
		}
	}, []);

	const providerValues: ItodoWelcomeControllerContext = useMemo(
		() => ({
			tasks,
			loading,
			handleViewAllTasks,
			schema: todoApi.getSchema(),
			handleTaskStatusChange,
			onViewClick,
			onEditButtonClick,
			onDeleteButtonClick,
			currentUser,
			userLoading
		}),
		[
			tasks,
			loading,
			handleViewAllTasks,
			handleTaskStatusChange,
			onViewClick,
			onEditButtonClick,
			onDeleteButtonClick,
			currentUser,
			userLoading
		]
	);

	return (
		<todoWelcomeControllerContext.Provider value={providerValues}>
			<TodoWelcomeView />
		</todoWelcomeControllerContext.Provider>
	);
};

export default todoWelcomeController;
