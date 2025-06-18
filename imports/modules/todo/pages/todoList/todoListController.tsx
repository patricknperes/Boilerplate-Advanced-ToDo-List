import React, { useCallback, useMemo, useContext, useState } from 'react';
import TodoListView from './todoListView';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';
import { ISchema } from '/imports/typings/ISchema';
import { ITodo } from '../../api/todoSch';
import { todoApi } from '../../api/todoApi';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';
import { sysSizing } from '../../../../ui/materialui/styles'; // mesmo import usado em UserProfile
import TodoDetailController from '../todoDetail/todoDetailContoller';
import { IMeteorError } from '/imports/typings/BoilerplateDefaultTypings';
import { dialogSx } from './todoListStyles';

interface IInitialConfig {
	sortProperties: { field: string; sortAscending: boolean };
	filter: Object;
	searchBy: string | null;
	viewComplexTable: boolean;
}

interface ITodoListContollerContext {
	onAddButtonClick: () => void;
	onDeleteButtonClick: (row: any) => void;
	onEditButtonClick: (taskId: string) => void;
	onViewClick: (taskId: string) => void;
	handleTaskStatusChange: (task: ITodo, checked: boolean) => void;
	todoList: ITodo[];
	schema: ISchema<any>;
	loading: boolean;
	onChangeTextField: (event: React.ChangeEvent<HTMLInputElement>) => void;
	filterMode: 'all' | 'user';
	setFilterMode: (mode: 'all' | 'user') => void;
}

export const TodoListControllerContext = React.createContext<ITodoListContollerContext>(
	{} as ITodoListContollerContext
);

const initialConfig = {
	sortProperties: { field: 'createdat', sortAscending: true },
	filter: {},
	searchBy: null,
	viewComplexTable: false
};

const TodoListController = () => {
	const userId = Meteor.userId();

	const [config, setConfig] = React.useState<IInitialConfig>(initialConfig);
	const [filterMode, setFilterMode] = useState<'all' | 'user'>('all');

	const currentFilter = {
		...(filterMode === 'all' ? { $or: [{ createdby: userId }, { visibilidade: 'public' }] } : { createdby: userId }),
		...config.filter
	};
	console.log('currentFilter', currentFilter);

	const { title, description, usuario } = todoApi.getSchema();
	const todoSchReduzido = { title, description, usuario };
	const { showDialog } = useContext<IAppLayoutContext>(AppLayoutContext);
	const { sortProperties, filter } = config;

	const sort = {
		[sortProperties.field]: sortProperties.sortAscending ? 1 : -1
	};

	const { loading, todos } = useTracker(() => {
		const subHandle = todoApi.subscribe('todoList', currentFilter, {
			sort
		});
		const todos = subHandle?.ready() ? todoApi.find(currentFilter, { sort }).fetch() : [];
		return {
			todos,
			loading: !!subHandle && !subHandle.ready(),
			total: subHandle ? subHandle.total : todos.length
		};
	}, [config, Meteor.userId(), filterMode, userId]);

	const onAddButtonClick = useCallback(() => {
		const newId = nanoid();
		showDialog({
			sx: dialogSx,
			children: <TodoDetailController id={newId} mode="create" />
		});
	}, []);

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

	const onChangeTextField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = event.target;
		const delayedSearch = setTimeout(() => {
			setConfig((prev) => ({
				...prev,
				filter: { ...prev.filter, title: { $regex: value.trim(), $options: 'i' } }
			}));
		}, 1000);
		return () => clearTimeout(delayedSearch);
	}, []);

	const providerValues: ITodoListContollerContext = useMemo(
		() => ({
			onAddButtonClick,
			onDeleteButtonClick,
			onEditButtonClick,
			onViewClick,
			handleTaskStatusChange,
			todoList: todos,
			schema: todoSchReduzido,
			loading,
			onChangeTextField,
			filterMode,
			setFilterMode
		}),
		[todos, loading]
	);

	return (
		<TodoListControllerContext.Provider value={providerValues}>
			<TodoListView />
		</TodoListControllerContext.Provider>
	);
};

export default TodoListController;
