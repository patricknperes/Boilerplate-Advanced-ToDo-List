import React, { useContext } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { sysSizing } from '/imports/ui/materialui/styles';
import { todoApi } from '../../api/todoApi';
import { ITodo } from '../../api/todoSch';
import SysIcon from '/imports/ui/components/sysIcon/sysIcon';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';
import TodoWelcomeStyles from './todoWelcomeStyles';
import { todoWelcomeControllerContext } from '../todoWelcome/todoWelcomeController';
import { Task } from '/imports/modules/todo/components/taskItem/task';
import CircularProgress from '@mui/material/CircularProgress';
import { SysFab } from '/imports/ui/components/sysFab/sysFab';

const todoWelcomeView = () => {
	const controller = React.useContext(todoWelcomeControllerContext);

	const {
		tasks,
		loading,
		handleViewAllTasks,
		onEditButtonClick,
		onViewClick,
		handleTaskStatusChange,
		onDeleteButtonClick,
		currentUser
	} = controller;
	const { Background, Container, ListContainer, ListWrapper, NothingHere, Heading1, Heading2, LoadingContainer } =
		TodoWelcomeStyles;

	return (
		<Background>
			<Container>
				<Heading1>Olá, {currentUser}!</Heading1>
				<Heading2>
					Seus projetos muito mais organizados. Veja as tarefas adicionadas por seu time, por você e para você!
				</Heading2>
				{loading ? (
					<LoadingContainer>
						<CircularProgress />
						<Typography variant="body1">Aguarde, carregando informações...</Typography>
					</LoadingContainer>
				) : tasks.length > 0 ? (
					<ListContainer>
						<Typography variant="h4" sx={{ margin: '16px 0 8px' }}>
							Adicionadas recentemente
						</Typography>
						{tasks.map((task) => (
							<Task
								key={task._id}
								id={task._id!}
								checked={task.checked}
								username={task.usuario}
								tarefa={task.title}
								visibilidade={task.visibilidade}
								description={task.description}
								createdby={task.createdby!}
								onEditButtonClick={onEditButtonClick}
								onViewClick={onViewClick}
								handleTaskStatusChange={handleTaskStatusChange}
								onDeleteButtonClick={onDeleteButtonClick}
							/>
						))}
					</ListContainer>
				) : (
					<ListContainer>
						<Typography variant="h4" sx={{ margin: '16px 0 8px' }}>
							Adicionadas recentemente
						</Typography>
						<Box
							sx={{
								width: '100%',
								height: '100%',
								display: 'flex',
								alignItems: 'center',
								mb: 2,
								flexDirection: 'column'
							}}>
							<Typography variant="h5" color="sysText.disabled">
								Nenhuma tarefa encontrada
							</Typography>
							<Typography variant="body2" color="sysText.disabled">
								Acesse a lista de tarefas
							</Typography>
							<NothingHere />
						</Box>
					</ListContainer>
				)}

				<SysFab
					variant="extended"
					text="Ir para tarefas"
					endIcon={<SysIcon name={'arrowForward'} />}
					fixed={true}
					onClick={handleViewAllTasks}
				/>
			</Container>
		</Background>
	);
};
export default todoWelcomeView;
