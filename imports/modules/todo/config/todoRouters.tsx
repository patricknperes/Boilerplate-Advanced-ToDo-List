import TodoContainer from '../todoContainer';
import TodoWelcomeController from '../pages/todoWelcome/todoWelcomeController';
import { Recurso } from './recursos';
import { IRoute } from '/imports/modules/modulesTypings';

export const todoRouterList: (IRoute | null)[] = [
	{
		path: '/welcome',
		component: TodoWelcomeController,
		isProtected: true,
		resources: [Recurso.EXAMPLE_VIEW]
	},
	{
		path: '/todo/:screenState/:todoId',
		component: TodoContainer,
		isProtected: true,
		resources: [Recurso.EXAMPLE_VIEW]
	},
	{
		path: '/todo/:screenState',
		component: TodoContainer,
		isProtected: true,
		resources: [Recurso.EXAMPLE_CREATE]
	},
	{
		path: '/todo',
		component: TodoContainer,
		isProtected: true,
		resources: [Recurso.EXAMPLE_CREATE]
	}
];
