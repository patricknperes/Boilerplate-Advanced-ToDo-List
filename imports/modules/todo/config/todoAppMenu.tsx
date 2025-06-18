import React from 'react';
import { IAppMenu } from '/imports/modules/modulesTypings';
import SysIcon from '/imports/ui/components/sysIcon/sysIcon';

export const todoMenuItemList: (IAppMenu | null)[] = [
	{
		path: '/',
		name: 'Home',
		icon: <SysIcon name={'home'} />
	},
	{
		path: '/todo',
		name: 'Todo',
		icon: <SysIcon name={'task'} />
	}
];
