import { IAppMenu, IModuleHub, IRoute } from './modulesTypings';
import ToDo from './todo/config';

const pages: Array<IRoute | null> = [...ToDo.pagesRouterList];

const menuItens: Array<IAppMenu | null> = [...ToDo.pagesMenuItemList];

const Modules: IModuleHub = {
	pagesMenuItemList: menuItens,
	pagesRouterList: pages
};

export default Modules;
