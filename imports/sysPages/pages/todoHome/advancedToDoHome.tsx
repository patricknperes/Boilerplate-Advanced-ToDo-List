import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import advancedToDoHomeStyle from './advancedToDoHomeStyles';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AdvancedToDoHome = () => {
	const isSmallScreen = useMediaQuery('(max-width:500px)');
	const navigate = useNavigate();
	const theme = useTheme();
	const handleLogin = () => {
		navigate('/signin', { state: { from: 'home' } });
	};
	const handleRegister = () => {
		navigate('/signup', { state: { from: 'home' } });
	};
	const isSmallScreenCard = useMediaQuery(theme.breakpoints.down('sm'));
	const { Background, Container, Content, Header, Label, ButtonContainer, Button, ButtonLogin } = advancedToDoHomeStyle;

	return (
		<Background>
			<Container>
				<Content>
					<Header gutterBottom>
						Boilerplate ToDo List {' '}
						{!isSmallScreen && <br />}
						<span style={{ color: 'var(--color-accent)' }}>Synergia</span>{' '}UFMG
					</Header>
					<Label gutterBottom>
						Projeto de ToDo List desenvolvido por Patrick Peres Nicolini na terceira etapa do treinamento de estagiários da Synergia, utilizando o boilerplate da empresa.
					</Label>
					<ButtonContainer>
						<Button
							variant="contained"
							onClick={handleLogin}
							color="primary"
							size={isSmallScreenCard ? 'small' : 'large'}
							endIcon={<ArrowForwardIcon />} >
							Iniciar Sessão
						</Button>
						<ButtonLogin
							variant="outlined"
							onClick={handleRegister}
							size={isSmallScreenCard ? 'small' : 'large'}
							color="secondary"
						>
							Register

						</ButtonLogin>



					</ButtonContainer>
				</Content>
			</Container>
		</Background>
	);
};

export default AdvancedToDoHome;
