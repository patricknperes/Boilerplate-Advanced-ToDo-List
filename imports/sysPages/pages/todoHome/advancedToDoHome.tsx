import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, useTheme, useMediaQuery } from '@mui/material';
import advancedToDoHomeStyle from './advancedToDoHomeStyles';
import { useNavigate } from 'react-router-dom';
import Typography from '@mui/material/Typography';

const AdvancedToDoHome = () => {
	const navigate = useNavigate();
	const theme = useTheme();
	const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // <600px
	const handleLogin = () => {
		navigate('/signin', { state: { from: 'home' } });
	};
	const { Container, Content, Mainbox, Title, TitleText, SubText, Logo, ButtonWrapper, BoilerplateBox, HomeButton } =
		advancedToDoHomeStyle;

	return (
		<Container>
			<Content>
				<Mainbox elevation={0}>
					<Title>
						<Logo />
						<TitleText variant="h1">
							Advanced <br /> To-Do
						</TitleText>
					</Title>

					{!isSmallScreen && (
						<SubText variant="h5">
							Gerencie suas tarefas <br /> de forma prática
						</SubText>
					)}

					<ButtonWrapper>
						<HomeButton
							onClick={handleLogin}
							type="submit"
							variant="contained"
							fullWidth
							aria-label="Log in to Advanced To-Do">
							Log in
						</HomeButton>
					</ButtonWrapper>

					<BoilerplateBox>
						<Typography variant={isSmallScreen ? 'h3' : 'h2'} display={'inline-flex'} gap={1}>
							<Typography variant="inherit" color={(theme) => theme.palette.sysText?.tertiary} sx={{ opacity: 0.7 }}>
								{'{'}
							</Typography>
							Boilerplate
							<Typography variant="inherit" color={(theme) => theme.palette.sysText?.tertiary} sx={{ opacity: 0.7 }}>
								{'}'}
							</Typography>
							<Typography variant="inherit" color="#fdffe2" sx={{ marginLeft: '4px' }}>
								edition
							</Typography>
						</Typography>
					</BoilerplateBox>
				</Mainbox>
			</Content>
		</Container>
	);
};

export default AdvancedToDoHome;
