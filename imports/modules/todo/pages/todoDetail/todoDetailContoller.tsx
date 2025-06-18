import React, { createContext, useCallback, useContext, useState } from 'react';
import TodoDetailView from './todoDetailView';
import { useNavigate } from 'react-router-dom';
import { TodoModuleContext } from '../../todoContainer';
import { useTracker } from 'meteor/react-meteor-data';
import { todoApi } from '../../api/todoApi';
import { ITodo } from '../../api/todoSch';
import { ISchema } from '/imports/typings/ISchema';
import { IMeteorError } from '/imports/typings/BoilerplateDefaultTypings';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';

interface ITodoDetailContollerContext {
	closePage: () => void;
	document: ITodo;
	loading: boolean;
	schema: ISchema<ITodo>;
	onSubmit: (doc: ITodo) => void;
	changeToEdit: (id: string) => void;
}

interface ITodoDetailControllerProps {
	id?: string;
	mode: 'create' | 'edit' | 'view';
}

export const TodoDetailControllerContext = createContext<ITodoDetailContollerContext>(
	{} as ITodoDetailContollerContext
);

const TodoDetailController = ({ id, mode: initialMode }: ITodoDetailControllerProps) => {
	const { showNotification, closeDialog } = useContext<IAppLayoutContext>(AppLayoutContext);
	const [mode, setMode] = useState<'create' | 'edit' | 'view'>(initialMode);

	const { document, trackerLoading } = useTracker(() => {
		const sub = todoApi.subscribe('todoDetail', { _id: id });
		const doc = sub?.ready() ? todoApi.findOne({ _id: id }) : {};
		return {
			document: (doc as ITodo) ?? ({ _id: id } as ITodo),
			trackerLoading: !!sub && !sub.ready()
		};
	}, [id]);

	const changeToEdit = useCallback((id: string) => {
		if (id) {
			setMode('edit');
		}
	}, []);

	const onSubmit = useCallback(
		(doc: ITodo) => {
			const action = mode === 'create' ? 'insert' : 'update';
			const docToInsert = action === 'insert' ? { ...doc, checked: false } : doc;
			todoApi[action](docToInsert, (e: IMeteorError) => {
				if (!e) {
					showNotification({
						type: 'success',
						title: 'Operação realizada!',
						message: `Item ${mode === 'create' ? 'criado' : 'atualizado'} com sucesso!`
					});
					closeDialog();
				} else {
					showNotification({
						type: 'error',
						title: 'Operação não realizada!',
						message: `Erro: ${e.reason}`
					});
				}
			});
		},
		[mode, id]
	);

	return (
		<TodoDetailControllerContext.Provider
			value={{
				closePage: closeDialog,
				document,
				loading: trackerLoading,
				schema: todoApi.getSchema(),
				onSubmit,
				changeToEdit
			}}>
			<TodoDetailView mode={mode} />
		</TodoDetailControllerContext.Provider>
	);
};
export default TodoDetailController;
