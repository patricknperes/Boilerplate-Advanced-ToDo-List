import React, { useContext, useRef } from 'react';
import { Form, Link, NavigateFunction } from 'react-router-dom';
import SysTextField from '../../../ui/components/sysFormFields/sysTextField/sysTextField';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';
import { userprofileApi } from '../../../modules/userprofile/api/userProfileApi';
import SysForm from '../../../ui/components/sysForm/sysForm';
import { signUpSchema } from './signupsch';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import signUpStyle from './signUpStyle';
import Box from '@mui/material/Box';
import { IUserProfile } from '/imports/modules/userprofile/api/userProfileSch';
import AppLayoutContext from '/imports/app/appLayoutProvider/appLayoutContext';
import { useNavigate } from 'react-router-dom';
import { textfieldSx } from '../signUp/signUpStyle';

interface ISignUp {
	showNotification: (options?: Object) => void;
	navigate: NavigateFunction;
	user: IUserProfile;
}

export const SignUp = (props: ISignUp) => {
	const { Container, Content, FormContainer, FormWrapper, StyledLoginButton } = signUpStyle;
	const { showNotification } = useContext(AppLayoutContext);
	const navigate = useNavigate();

	const handleLogin = () => {
		navigate('/signin', { state: { from: 'signup' } });
	};

	const handleSubmit = (doc: { email: string; username: string; password: string }) => {
		const { email, username, password } = doc;

		userprofileApi.insertNewUser({ email, username, password }, (err, r) => {
			if (err) {
				console.log('signup err', err);
				showNotification &&
					showNotification({
						type: 'warning',
						title: 'Problema na criação do usuário!',
						message: 'Erro ao fazer registro em nossa base de dados!'
					});
			} else {
				navigate('/signin', { state: { from: 'signup' } });
				showNotification &&
					showNotification({
						type: 'success',
						title: 'Cadastrado com sucesso!',
						message: 'Registro de usuário realizado em nossa base de dados!'
					});
			}
		});
	};

	return (
		<Container>
			<Content>
				<Box component="img" src="/images/wireframe/synergia-logo.svg" sx={{ width: '100%', maxWidth: '400px' }} />
				<FormContainer>
					<Box sx={{ display: 'flex', flexDirection: 'flex-start', textAlign: 'left', width: '100%' }}>
						<Typography variant="h5">Sign up</Typography>
					</Box>
					<SysForm schema={signUpSchema} onSubmit={handleSubmit}>
						<FormWrapper>
							<SysTextField name="username" fullWidth type="text" placeholder="Digite um nome de usuário" />
							<SysTextField name="email" fullWidth type="email" placeholder="Digite um email" />
							<SysTextField name="password" fullWidth type="password" placeholder="Digite uma senha" />
							<Button variant="text" sx={{ alignSelf: 'flex-end', border: 0, padding: 0 }} onClick={handleLogin}>
								<Typography variant="link">Já possui conta? faça seu login</Typography>
							</Button>
							<StyledLoginButton variant="contained">Cadastrar</StyledLoginButton>
						</FormWrapper>
					</SysForm>
				</FormContainer>
			</Content>
		</Container>
	);
};
