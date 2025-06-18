import { IDoc } from '/imports/typings/IDoc';
import { ISchema } from '/imports/typings/ISchema';

export const todoSch: ISchema<ITodo> = {
	title: {
		type: String,
		label: 'Nome',
		defaultValue: '',
		optional: false
	},
	description: {
		type: String,
		label: 'Descrição',
		defaultValue: '',
		optional: true
	},
	visibilidade: {
		type: String,
		label: 'Visibilidade',
		optional: false,
		options: () => [
			{ value: 'public', label: 'Público' },
			{ value: 'private', label: 'Privado' }
		]
	},
	checked: {
		type: Boolean,
		label: 'Concluído',
		defaultValue: false,
		optional: true
	},
	usuario: {
		type: String,
		label: 'Usuário',
		optional: true
	}
};

export interface ITodo extends IDoc {
	title: string;
	description: string;
	visibilidade: string;
	checked: boolean;
	usuario: string;
}
