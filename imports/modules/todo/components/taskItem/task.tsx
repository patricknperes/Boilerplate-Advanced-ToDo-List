import React, { useContext } from 'react';
import { Checkbox, SxProps, Theme } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SysIcon from '../../../../ui/components/sysIcon/sysIcon';
import { SysCheckBox } from '/imports/ui/components/sysFormFields/sysCheckBoxField/sysCheckBoxField';
import TaskStyled from './taskStyle';
import { TodoListControllerContext } from '../../pages/todoList/todoListController';
import Divider from '@mui/material/Divider';
import DeleteDialog from '/imports/ui/appComponents/showDialog/custom/deleteDialog/deleteDialog';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';
import { ITodo } from '../../api/todoSch';
import { create } from 'lodash';

interface ITask {
	id: string;
	checked: boolean;
	username: string;
	tarefa: string;
	visibilidade: string;
	description: string;
	createdby: string;
	sx?: SxProps<Theme>;
	onEditButtonClick: (taskId: string) => void;
	onViewClick: (taskId: string) => void;
	handleTaskStatusChange: (task: ITodo, checked: boolean) => void;
	onDeleteButtonClick: (row: any) => void;
}

export const Task: React.FC<ITask> = ({
	id,
	checked,
	username,
	tarefa,
	visibilidade,
	description,
	createdby,
	sx,
	onEditButtonClick,
	onViewClick,
	handleTaskStatusChange,
	onDeleteButtonClick
}) => {
	const sysLayoutContext = useContext<IAppLayoutContext>(AppLayoutContext);

	const { Container, Content, Check, Task, ActionBox } = TaskStyled;

	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const task: ITodo = {
			_id: id,
			checked: event.target.checked,
			visibilidade: visibilidade,
			usuario: username,
			title: tarefa,
			description: description
		};
		if (createdby !== Meteor.userId()) {
			sysLayoutContext.showNotification({
				type: 'error',
				message: 'Você não pode alterar o status de uma tarefa que não é sua!'
			});
			return;
		}
		handleTaskStatusChange(task, event.target.checked);
		console.log('id', id);
		sysLayoutContext.showNotification({
			message: event.target.checked ? 'Tarefa concluída!' : 'Tarefa não concluída!'
		});
	};

	return (
		<Container sx={sx} key={id}>
			<Content>
				<Check>
					<Checkbox checked={checked} onChange={handleCheckboxChange} sx={{ p: 0, color: 'white' }} />
				</Check>
				<Task onClick={() => onViewClick(id)}>
					<Typography variant="body1" sx={{ color: 'white', textDecoration: checked ? 'line-through' : 'none' }}>
						{tarefa}
					</Typography>
					<Typography variant="caption" color="sysText.disabled" sx={{ fontStyle: 'italic' }}>
						Criada por: {username}
					</Typography>
				</Task>
				<ActionBox>
					<Tooltip title={'Editar'}>
						<IconButton
							onClick={() => {
								if (createdby !== Meteor.userId()) {
									sysLayoutContext.showNotification({
										type: 'error',
										message: 'Você não pode editar uma tarefa que não é sua!'
									});
									return;
								}
								onEditButtonClick(id);
							}}>
							<SysIcon
								sx={(theme) => ({
									color: theme.palette.todoColors.lightPurple
								})}
								name={'edit'}
							/>
						</IconButton>
					</Tooltip>
					<Tooltip title={'Excluir'}>
						<IconButton
							onClick={() => {
								if (createdby !== Meteor.userId()) {
									sysLayoutContext.showNotification({
										type: 'error',
										message: 'Você não pode excluir uma tarefa que não é sua!'
									});
									return;
								}
								DeleteDialog({
									showDialog: sysLayoutContext.showDialog,
									closeDialog: sysLayoutContext.closeDialog,
									title: `Excluir tarefa`,
									message: `Tem certeza que deseja excluir a tarefa?`,
									onDeleteConfirm: () => {
										onDeleteButtonClick({ _id: id });
										sysLayoutContext.showNotification({
											message: 'Excluído com sucesso!'
										});
									}
								});
							}}>
							<SysIcon sx={{ color: '#FF6666' }} name={'delete'} />
						</IconButton>
					</Tooltip>
				</ActionBox>
			</Content>
			<Divider />
		</Container>
	);
};
