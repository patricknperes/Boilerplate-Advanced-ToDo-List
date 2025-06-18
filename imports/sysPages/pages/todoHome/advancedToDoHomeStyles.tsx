import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface ItoDoHomeStyles {
	Container: React.ElementType;
	Content: React.ElementType;
	Mainbox: React.ElementType;
	Title: React.ElementType;
	TitleText: React.ElementType;
	SubText: React.ElementType;
	Logo: React.ElementType;
	ButtonWrapper: React.ElementType;
	BoilerplateBox: React.ElementType;
	HomeButton: React.ElementType;
}

const advancedToDoHomeStyle: ItoDoHomeStyles = {
	Container: styled(Box)(({ theme }) => ({
		background: "url('/images/wireframe/Cloudy.svg') no-repeat center center",
		backgroundSize: 'cover',
		minHeight: '100vh',
		width: '100%',
		margin: 0,
		padding: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	})),

	Content: styled(Box)(({ theme }) => ({
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight: '100vh',
		width: '100%',
		margin: 0,
		padding: 0
	})),

	Mainbox: styled(Paper)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%',
		maxWidth: '90%',
		minHeight: 'auto',
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		backdropFilter: 'blur(30px)',
		borderRadius: '15px',
		padding: '1rem',
		margin: '2rem auto',
		boxShadow: '0 0 25px rgba(0, 0, 0, 0.8)',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			maxWidth: '70%',
			minHeight: '75vh',
			padding: '2rem',
			alignItems: 'flex-start'
		}
	})),

	Title: styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row',
			justifyContent: 'flex-start',
			alignItems: 'flex-start'
		}
	})),

	TitleText: styled(Typography)(({ theme }) => ({
		color: '#fdffe2',
		fontSize: 'clamp(2rem, 5vw, 2.7rem)',
		fontWeight: 400,
		lineHeight: 1.2,
		textAlign: 'center',
		[theme.breakpoints.down('sm')]: {
			fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
		},
		[theme.breakpoints.up('md')]: {
			textAlign: 'left'
		}
	})),

	SubText: styled(Typography)(({ theme }) => ({
		color: '#fdffe2',
		fontSize: 'clamp(1.3rem, 5vw, 3rem)',
		fontWeight: 400,
		lineHeight: 1.2,
		marginLeft: '8%',
		marginBottom: '1rem',
		textAlign: 'left',
		[theme.breakpoints.down('sm')]: {
			fontSize: 'clamp(1.4rem, 4.2vw, 2.5rem)',
			marginLeft: '0'
		}
	})),

	Logo: styled(Box)(({ theme }) => ({
		width: 'clamp(80px, 13vw, 100px)',
		height: 'clamp(80px, 13vw, 100px)',
		backgroundColor: '#fdffe2',
		mask: "url('/images/task-line.svg') no-repeat center / contain",
		WebkitMask: "url('/images/task-line.svg') no-repeat center / contain",
		marginBottom: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			width: 'clamp(60px, 10vw, 80px)',
			height: 'clamp(60px, 10vw, 80px)'
		},
		[theme.breakpoints.up('md')]: {
			marginRight: theme.spacing(2),
			marginBottom: 0
		}
	})),

	ButtonWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		maxWidth: '300px',
		margin: '1rem auto',
		[theme.breakpoints.down('sm')]: {
			maxWidth: '80%',
			padding: '0 1rem'
		},
		[theme.breakpoints.up('md')]: {
			marginLeft: '8%',
			marginBottom: '10%',
			marginTop: '1rem',
			minWidth: '220px'
		}
	})),

	HomeButton: styled(Button)(({ theme }) => ({
		background: `linear-gradient(135deg, ${theme.palette.todoColors.lightPurple}, ${theme.palette.todoColors.enchantBlue})`,
		width: '100%',
		borderRadius: '15px',
		padding: theme.spacing(1.5, 3),
		fontWeight: 600,
		textTransform: 'capitalize',
		fontSize: '1rem',
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.9rem',
			padding: theme.spacing(1, 2)
		},
		'&:hover': {
			boxShadow: theme.shadows[4]
		}
	})),

	BoilerplateBox: styled(Box)(({ theme }) => ({
		margin: '1rem auto',
		textAlign: 'center',
		width: '100%',
		[theme.breakpoints.up('md')]: {
			position: 'absolute',
			bottom: '2rem',
			right: '2.5rem',
			width: 'auto'
		}
	}))
};

export default advancedToDoHomeStyle;
