import React, { useContext, useEffect } from 'react';
import SignInStyles from './signInStyles';
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

const SignInPage: React.FC = () => {
	const { showNotification } = useContext(AppLayoutContext);
	const { user, signIn } = useContext<IAuthContext>(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location.state?.from || 'home';
	const { Container, Content, FormContainer, FormWrapper, StyledLoginButton, Logo } = SignInStyles(from);

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

	const handleForgotPassword = () => {
		navigate('/signup', { state: { from: 'signin' } });
	};

	useEffect(() => {
		if (user) navigate('/');
	}, [user]);

	return (
		<Container>
			<Content>
				<Logo component="img" src="/images/wireframe/synergia-logo.svg" sx={{ width: '100%', maxWidth: '400px' }} />
				<FormContainer>
					<Box sx={{ display: 'flex', flexDirection: 'flex-start', textAlign: 'left', width: '100%' }}>
						<Typography variant="h5">Log in</Typography>
					</Box>
					<SysForm schema={signInSchema} onSubmit={handleSubmit} debugAlerts={false}>
						<FormWrapper>
							<SysTextField autoComplete="off" name="email" label="Email" fullWidth placeholder="Digite seu email" />
							<SysTextField
								autoComplete="off"
								label="Senha"
								fullWidth
								name="password"
								placeholder="Digite sua senha"
								type="password"
							/>
							<Button variant="text" sx={{ alignSelf: 'flex-end', padding: 0 }} onClick={handleForgotPassword}>
								<Typography variant="link">Crie uma conta</Typography>
							</Button>
							<Box />
							<StyledLoginButton variant="contained">Entrar</StyledLoginButton>
						</FormWrapper>
					</SysForm>
				</FormContainer>
			</Content>
		</Container>
	);
};

export default SignInPage;
