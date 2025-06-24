import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, useTheme, useMediaQuery } from '@mui/material';
import advancedToDoHomeStyle from './advancedToDoHomeStyles';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const AdvancedToDoHome = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const handleLogin = () => {
		navigate('/signin', { state: { from: 'home' } });
	};
	const { Background, Container, Content, Header, Label, ButtonContainer, Button } = advancedToDoHomeStyle;

	return (
		<Background>
			<Container>
				<Content>
					<Header>Advanced ToDo List <br /> Synergia UFMG</Header>
					<Label>
						Projeto desenvolvido por Patrick Peres durante o treinamento, utilizando Meteor, React, React Router e Material-UI para criar uma lista de tarefas moderna com autenticação, rotas e dashboard.
					</Label>
					<ButtonContainer>
						<Button variant="contained" onClick={handleLogin}>
							Get Started
						</Button>
					</ButtonContainer>
				</Content>
			</Container>
		</Background>
	);
};

export default AdvancedToDoHome;
