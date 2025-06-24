import React, { useContext, useEffect } from 'react';
import SignInStyles from './signInStyles';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import SysTextField from '../../../ui/components/sysFormFields/sysTextField/sysTextField';
import SysForm from '../../../ui/components/sysForm/sysForm';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';
import { signInSchema } from './signinsch';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AuthContext, { IAuthContext } from '/imports/app/authProvider/authContext';
import AppLayoutContext from '/imports/app/appLayoutProvider/appLayoutContext';

import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';

const SignInPage: React.FC = () => {
	const { showNotification } = useContext(AppLayoutContext);
	const { user, signIn } = useContext<IAuthContext>(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from || 'home';
	const { Background, Container, Content, LoginHeader, LoginLabel, FormContainer, FormField, FormWrapper, SysLoginTextField, StyledLoginButton, ForgotPassword } = SignInStyles(from);

	const handleSubmit = ({ email, password }: { email: string; password: string }) => {
		signIn(email, password, (err) => {
			if (!err) navigate('/');
			console.log('Login err', err);
			if (err) {
				showNotification({
					type: 'error',
					title: 'Erro ao tentar logar',
					message: 'Email ou senha inválidos'
				});
			}
		});
	};

	useEffect(() => {
		if (user) navigate('/');
	}, [user]);

	return (
		<Background>

			<Container>
				<Content>
					<LoginHeader>
						<LoginLabel>
							Login
						</LoginLabel>
					</LoginHeader>
					<FormContainer>
						<SysForm schema={signInSchema} onSubmit={handleSubmit} debugAlerts={false}>
							<FormWrapper>
								<SysLoginTextField
									variant="outlined"
									name="email"
									label="Email"
									value="admin@mrb.com"
									fullWidth
									autoComplete="off"
									placeholder="Digite seu email"
									endAdornment={<EmailIcon />}
								/>
								<SysLoginTextField
									variant="outlined"
									label="Senha"
									value="admin@mrb.com"
									fullWidth
									autoComplete="off"
									name="password"
									placeholder="Digite sua senha"
									type="password"
									endAdornment={
										<LockIcon />
									}
								/>
								<StyledLoginButton
									variant="contained"
									endIcon={<LoginIcon />}
								>
									Entrar
								</StyledLoginButton>
								<ForgotPassword>
									Já tem uma conta? {' '}
									<Link
										to="/signup"
										style={{
											textDecoration: 'none',
											color: '#fff',
											fontWeight: 700
										}}
										onMouseOver={e => (e.currentTarget.style.textDecoration = 'underline')}
										onMouseOut={e => (e.currentTarget.style.textDecoration = 'none')}
									>
										Faça login
									</Link>
								</ForgotPassword>
							</FormWrapper>
						</SysForm>
					</FormContainer>
				</Content>
			</Container>
		</Background>
	);
};

export default SignInPage;
