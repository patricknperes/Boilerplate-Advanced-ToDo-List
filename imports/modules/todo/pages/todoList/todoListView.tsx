import React, { useContext, useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { SysFab } from '/imports/ui/components/sysFab/sysFab';
import { TodoListControllerContext } from './todoListController';
import { useNavigate } from 'react-router-dom';
import { ComplexTable } from '/imports/ui/components/ComplexTable/ComplexTable';
import DeleteDialog from '/imports/ui/appComponents/showDialog/custom/deleteDialog/deleteDialog';
import AppLayoutContext, { IAppLayoutContext } from '/imports/app/appLayoutProvider/appLayoutContext';
import TodoListStyles from './todoListStyles';
import SysTextField from '/imports/ui/components/sysFormFields/sysTextField/sysTextField';
import { SysSelectField } from '/imports/ui/components/sysFormFields/sysSelectField/sysSelectField';
import SysIcon from '/imports/ui/components/sysIcon/sysIcon';
import { Task } from '/imports/modules/todo/components/taskItem/task';
import { Chip } from '@mui/material';
import { sysTextFieldStyled } from './todoListStyles';

const TodoListView = () => {
	const controller = React.useContext(TodoListControllerContext);
	const {
		todoList,
		filterMode,
		setFilterMode,
		onEditButtonClick,
		onViewClick,
		handleTaskStatusChange,
		onDeleteButtonClick
	} = controller;
	const {
		Container,
		LoadingContainer,
		SearchContainer,
		ListContainer,
		ListWrapper,
		NothingHere,
		StatusBox,
		VisibilityOff,
		AllDone
	} = TodoListStyles;

	const notCompletedTasks = todoList?.filter((item) => !item.checked) || [];
	const completedTasks = todoList?.filter((item) => item.checked) || [];

	const [showNotCompleted, setShowNotCompleted] = useState(true);
	const [showCompleted, setShowCompleted] = useState(true);

	const toggleNotCompleted = () => setShowNotCompleted((prev) => !prev);
	const toggleCompleted = () => setShowCompleted((prev) => !prev);

	return (
		<Container>
			<Box sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
				<SearchContainer>
					<Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
						<Chip
							label="Todas as Tarefas"
							color={filterMode === 'all' ? 'primary' : 'secondary'}
							variant={filterMode === 'all' ? 'filled' : 'outlined'}
							onClick={() => setFilterMode('all')}
							clickable
						/>
						<Chip
							label="Minhas Tarefas"
							color={filterMode === 'user' ? 'primary' : 'secondary'}
							variant={filterMode === 'user' ? 'filled' : 'outlined'}
							onClick={() => setFilterMode('user')}
							clickable
						/>
					</Box>
					<SysTextField
						name="search"
						placeholder="Pesquisar por nome"
						onChange={controller.onChangeTextField}
						sxMap={{ textField: sysTextFieldStyled }}
						startAdornment={<SysIcon name={'search'} sx={{ color: 'white !important' }} />}
					/>
				</SearchContainer>
			</Box>
			{controller.loading ? (
				<LoadingContainer>
					<CircularProgress />
					<Typography variant="body1">Aguarde, carregando informações...</Typography>
				</LoadingContainer>
			) : (
				<Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
					<ListWrapper>
						<ListContainer>
							<Typography
								variant="h4"
								sx={(theme) => ({ margin: '16px 0 8px', color: theme.palette.todoColors.lightPurple })}>
								Não Concluídas
							</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
								<SysIcon
									name={showNotCompleted ? 'visibility' : 'visibilityOff'}
									onClick={toggleNotCompleted}
									sx={{ cursor: 'pointer', marginRight: 1 }}
								/>
								<Typography variant="body2" color="sysText.disabled">
									{notCompletedTasks.length} Tarefas
								</Typography>
							</Box>
							{showNotCompleted ? (
								<Box sx={{ minHeight: 350, maxHeight: 350, overflowY: 'auto' }}>
									{notCompletedTasks.length > 0 ? (
										notCompletedTasks.map((item) => (
											<Task
												key={item._id!}
												id={item._id!}
												checked={item.checked}
												username={item.usuario}
												tarefa={item.title}
												visibilidade={item.visibilidade}
												description={item.description}
												createdby={item.createdby!}
												sx={{ marginBottom: '10px' }}
												onEditButtonClick={onEditButtonClick}
												onViewClick={onViewClick}
												handleTaskStatusChange={handleTaskStatusChange}
												onDeleteButtonClick={onDeleteButtonClick}
											/>
										))
									) : (
										<StatusBox>
											<Typography
												variant="h6"
												sx={(theme) => ({
													color: theme.palette.todoColors.lightPurple,
													fontWeight: 'bold'
												})}>
												Nenhuma tarefa nova
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													color: theme.palette.todoColors.lightPurple
												})}>
												Adicione uma tarefa para vê-la aqui!
											</Typography>
											<AllDone />
										</StatusBox>
									)}
								</Box>
							) : (
								<StatusBox>
									<Typography
										variant="h6"
										sx={(theme) => ({
											color: theme.palette.todoColors.lightPurple,
											fontWeight: 'bold'
										})}>
										Visibilidade Off
									</Typography>
									<Typography
										variant="body2"
										sx={(theme) => ({
											color: theme.palette.todoColors.lightPurple
										})}>
										Clique no icone para ver as tarefas
									</Typography>
									<VisibilityOff />
								</StatusBox>
							)}
						</ListContainer>

						<ListContainer>
							<Typography
								variant="h4"
								sx={(theme) => ({ margin: '16px 0 8px', color: theme.palette.todoColors.lightPurple })}>
								Concluídas
							</Typography>
							<Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
								<SysIcon
									name={showCompleted ? 'visibility' : 'visibilityOff'}
									onClick={toggleCompleted}
									sx={{ cursor: 'pointer', marginRight: 1 }}
								/>
								<Typography variant="body2" color="sysText.disabled">
									{completedTasks.length} Tarefas
								</Typography>
							</Box>
							{showCompleted ? (
								<Box sx={{ minHeight: 350, maxHeight: 350, overflowY: 'auto' }}>
									{completedTasks.length > 0 ? (
										completedTasks.map((item) => (
											<Task
												key={item._id!}
												id={item._id!}
												checked={item.checked}
												username={item.usuario}
												tarefa={item.title}
												visibilidade={item.visibilidade}
												description={item.description}
												createdby={item.createdby!}
												sx={{ marginBottom: '10px' }}
												onEditButtonClick={onEditButtonClick}
												onViewClick={onViewClick}
												handleTaskStatusChange={handleTaskStatusChange}
												onDeleteButtonClick={onDeleteButtonClick}
											/>
										))
									) : (
										<StatusBox>
											<Typography
												variant="h6"
												sx={(theme) => ({
													color: theme.palette.todoColors.lightPurple,
													fontWeight: 'bold'
												})}>
												Nenhuma tarefa concluída
											</Typography>
											<Typography
												variant="body2"
												sx={(theme) => ({
													color: theme.palette.todoColors.lightPurple
												})}>
												Conclua uma tarefa para vê-la aqui!
											</Typography>
											<NothingHere />
										</StatusBox>
									)}
								</Box>
							) : (
								<StatusBox>
									<Typography
										variant="h6"
										sx={(theme) => ({
											color: theme.palette.todoColors.lightPurple,
											fontWeight: 'bold'
										})}>
										Visibilidade Off
									</Typography>
									<Typography
										variant="body2"
										sx={(theme) => ({
											color: theme.palette.todoColors.lightPurple
										})}>
										Clique no icone para ver as tarefas
									</Typography>
									<VisibilityOff />
								</StatusBox>
							)}
						</ListContainer>
					</ListWrapper>
				</Box>
			)}

			<SysFab
				variant="extended"
				text="Adicionar"
				startIcon={<SysIcon name={'add'} />}
				fixed={true}
				onClick={controller.onAddButtonClick}
			/>
		</Container>
	);
};

export default TodoListView;
