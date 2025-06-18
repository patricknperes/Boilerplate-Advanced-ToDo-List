import React, { useContext } from 'react';
import { TodoDetailControllerContext } from './todoDetailContoller';
import TodoDetailStyles from './todoDetailStyles';
import SysForm from '/imports/ui/components/sysForm/sysForm';
import SysTextField from '/imports/ui/components/sysFormFields/sysTextField/sysTextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SysFormButton from '/imports/ui/components/sysFormFields/sysFormButton/sysFormButton';
import SysIcon from '/imports/ui/components/sysIcon/sysIcon';
import { SysSelectField } from '/imports/ui/components/sysFormFields/sysSelectField/sysSelectField';
import { sysTextFieldStyled } from './todoDetailStyles';

interface TodoDetailViewProps {
	mode: 'create' | 'edit' | 'view';
}

const TodoDetailView = ({ mode }: TodoDetailViewProps) => {
	const controller = useContext(TodoDetailControllerContext);

	const isView = mode === 'view';
	const isEdit = mode === 'edit';
	const isCreate = mode === 'create';

	const { Container, Body, Header, Footer, FormColumn, CreatedBy } = TodoDetailStyles;

	let disabled = false;
	if (controller.document.createdby !== Meteor.userId()) {
		disabled = true;
	}

	return (
		<Container>
			<Header>
				<Typography variant="h5" sx={{ flexGrow: 1, color: '#BB86FC' }}>
					{isCreate ? 'Adicionar Tarefa' : isEdit ? 'Editar Tarefa' : 'Visualizar Tarefa'}
				</Typography>

				<IconButton onClick={controller.closePage}>
					<SysIcon name="close" sx={{ color: '#BB86FC !important' }} />
				</IconButton>
			</Header>

			<SysForm
				mode={mode}
				schema={controller.schema}
				doc={controller.document}
				onSubmit={controller.onSubmit}
				loading={controller.loading}>
				<Body>
					<FormColumn>
						<SysTextField name="title" placeholder="Ex.: Item XX" sxMap={{ textField: sysTextFieldStyled }} />
						<SysTextField
							name="description"
							placeholder="Acrescente informações sobre o item (3 linhas)"
							multiline
							rows={3}
							maxRows={3}
							showNumberCharactersTyped
							max={200}
							sxMap={{ textField: sysTextFieldStyled }}
						/>
						<SysSelectField name="visibilidade" placeholder="Selecionar" />
					</FormColumn>
				</Body>

				<Footer>
					{!isView && (
						<Button variant="outlined" startIcon={<SysIcon name="close" />} onClick={controller.closePage}>
							Cancelar
						</Button>
					)}
					{isView && (
						<Button
							disabled={disabled}
							variant="outlined"
							startIcon={<SysIcon name="edit" />}
							onClick={() => controller.changeToEdit(controller.document._id || '')}>
							Editar
						</Button>
					)}
					<SysFormButton>Salvar</SysFormButton>
				</Footer>
				{!isCreate && (
					<CreatedBy>
						<Typography
							variant="caption"
							sx={{
								fontStyle: 'italic',
								color: 'white'
							}}>
							Criado por:
							<br />
							{controller.document.usuario}
						</Typography>
					</CreatedBy>
				)}
			</SysForm>
		</Container>
	);
};

export default TodoDetailView;
