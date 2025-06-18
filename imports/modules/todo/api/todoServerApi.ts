// region Imports
import { Recurso } from '../config/recursos';
import { todoSch, ITodo } from './todoSch';
import { userprofileServerApi } from '/imports/modules/userprofile/api/userProfileServerApi';
import { ProductServerBase } from '/imports/api/productServerBase';
import { IUserProfile } from '/imports/modules/userprofile/api/userProfileSch';

// endregion

class TodoServerApi extends ProductServerBase<ITodo> {
	constructor() {
		super('todo', todoSch, {
			resources: Recurso
			// saveImageToDisk: true,
		});

		const self = this;

		this.addTransformedPublication(
			'todoList',
			(filter = {}) => {
				return this.defaultListCollectionPublication(filter, {
					projection: { title: 1, description: 1, visibilidade: 1, checked: 1, createdat: 1, createdby: 1, usuario: 1}
				});
			},
			async (doc: ITodo & { usuario: string }) => {
				try {
					const userProfileDoc = await userprofileServerApi
						.getCollectionInstance()
						.findOneAsync({ _id: doc.createdby });
					if (userProfileDoc?._id == Meteor.userId()) {
						doc.usuario = 'Você';
						return doc;
					}
					doc.usuario = userProfileDoc?.username || 'Unknown User';
					return doc;
				} catch (error) {
					console.error('Error fetching user information:', error);
					doc.usuario = 'Unknown User';
					return doc;
				}
			}
		);

		this.addTransformedPublication(
			'todoDetail',
			(filter = {}) => {
				return this.defaultDetailCollectionPublication(filter, {
					projection: {
						title: 1,
						description: 1,
						visibilidade: 1,
						checked: 1,
						createdat: 1,
						createdby: 1,
						usuario: 1
					}
				});
			},
			async (doc: ITodo & { usuario: string }) => {
				try {
					const userProfileDoc = await userprofileServerApi
						.getCollectionInstance()
						.findOneAsync({ _id: doc.createdby });
					if (userProfileDoc?._id == Meteor.userId()) {
						doc.usuario = 'Você';
						return doc;
					}
					doc.usuario = userProfileDoc?.username || 'Unknown User';
					return doc;
				} catch (error) {
					console.error('Error fetching user information:', error);
					doc.usuario = 'Unknown User';
					return doc;
				}
			}
		);

/* 		this.addRestEndpoint(
			'view',
			(params, options) => {
				console.log('Params', params);
				console.log('options.headers', options.headers);
				return { status: 'ok' };
			},
			['post']
		);

		this.addRestEndpoint(
			'view/:todoId',
			(params, _options) => {
				console.log('Rest', params);
				if (params.todoId) {
					return self
						.defaultCollectionPublication(
							{
								_id: params.todoId
							},
							{}
						)
						.fetch();
				} else {
					return { ...params };
				}
			},
			['get']
		); */
	}
}

export const todoServerApi = new TodoServerApi();
