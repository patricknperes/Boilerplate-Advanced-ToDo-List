import React, { useContext, useRef } from 'react';
import { Form, Link, NavigateFunction } from 'react-router-dom';
import { userprofileApi } from '../../../modules/userprofile/api/userProfileApi';
import SysForm from '../../../ui/components/sysForm/sysForm';
import { signUpSchema } from './signupsch';
import signUpStyle from './signUpStyle';
import { IUserProfile } from '/imports/modules/userprofile/api/userProfileSch';
import AppLayoutContext from '/imports/app/appLayoutProvider/appLayoutContext';
import { useNavigate } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

interface ISignUp {
	showNotification: (options?: Object) => void;
	navigate: NavigateFunction;
	user: IUserProfile;
}

export const SignUp = (props: ISignUp) => {
	const { Background, Container, Content, LoginHeader, LoginLabel, SysLoginTextField, ForgotPassword, FormContainer, FormWrapper, StyledLoginButton } = signUpStyle;
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
		<Background>
			<Container>
				<Content>
					<LoginHeader>
						<LoginLabel >
							<Link
								to="/"
								style={{
									textDecoration: 'none',
									color: 'var(--body-color)',
								}}
							>
								Register
							</Link>
						</LoginLabel>
					</LoginHeader>
					<FormContainer>
						<SysForm schema={signUpSchema} onSubmit={handleSubmit}>
							<FormWrapper>
								<SysLoginTextField
									variant="outlined"
									name="username"
									fullWidth
									type="text"
									placeholder="Digite um username"
									endAdornment={<PersonIcon />}
								/>
								<SysLoginTextField
									variant="outlined"
									name="email"
									fullWidth
									type="email"
									placeholder="Digite um email"
									endAdornment={<EmailIcon />}
								/>
								<SysLoginTextField
									variant="outlined"
									name="password"
									fullWidth
									type="password"
									placeholder="Digite uma senha"
									endAdornment={<LockIcon />}
								/>
								<StyledLoginButton
									variant="contained"
									endIcon={<PersonAddAltIcon />}
								>
									Cadastrar
								</StyledLoginButton>

							</FormWrapper>
							<ForgotPassword>
								Já tem uma conta? {' '}
								<Link
									to="/signin"
									style={{
										textDecoration: 'none',
										color: 'var(--title-color)',
										fontWeight: 'var(--font-bold)',
									}}
									onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
									onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
								>
									Faça login
								</Link>
							</ForgotPassword>
						</SysForm>
					</FormContainer>
				</Content>
			</Container>
		</Background>
	);
};
