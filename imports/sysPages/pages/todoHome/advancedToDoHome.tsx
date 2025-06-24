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
	const { } = advancedToDoHomeStyle;

	return (
		<></>

	);
};

export default AdvancedToDoHome;
