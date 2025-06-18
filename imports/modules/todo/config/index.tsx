import { todoRouterList } from './todoRouters';
import { todoMenuItemList } from './todoAppMenu';
import { IModuleHub } from '../../modulesTypings';

const ToDo: IModuleHub = {
	pagesRouterList: todoRouterList,
	pagesMenuItemList: todoMenuItemList
};

export default ToDo;
