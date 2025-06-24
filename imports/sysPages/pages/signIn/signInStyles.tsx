import React from 'react';
import Paper from '@mui/material/Paper';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { sysSizing } from '../../../ui/materialui/styles';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';
import SysTextField from '../../../ui/components/sysFormFields/sysTextField/sysTextField';
import Typography from '@mui/material/Typography';

interface ISignInStyles {
	Background: React.ElementType;
	Container: React.ElementType;
	Content: React.ElementType;
	LoginHeader: React.ElementType;
	LoginLabel: React.ElementType;
	FormContainer: React.ElementType;
	FormWrapper: React.ElementType;
	FormField: React.ElementType;
	StyledLoginButton: React.ElementType;
	ForgotPassword: React.ElementType;
	SysLoginTextField: React.ElementType;
}

const SignInStyles = (from: string): ISignInStyles => ({

	Background: styled(Box)(({ theme }) => ({
		width: '100%',
		backgroundImage: 'url(/images/wireframe/bg-purple.jpg)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
	})),

	Container: styled(Box)(({ theme }) => ({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
		[theme.breakpoints.down('sm')]: {
			padding: '0 1em',
		},
	})),

	Content: styled(Box)(({ theme }) => ({
		position: 'relative',
		width: '450px',
		backdropFilter: 'blur(25px)',
		border: '2px solid white',
		borderRadius: sysSizing.radiusMd,
		padding: '7.5em 2.5em 4em 2.5em',
		color: theme.palette.primary.contrastText,
		boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)',
		animation: 'slideIn 0.8s ease-out',
		'@keyframes slideIn': {
			'0%': { transform: 'translateY(50px)', opacity: 0 },
			'100%': { transform: 'translateY(0)', opacity: 1 },
		},
		[theme.breakpoints.down('md')]: {},
		[theme.breakpoints.down('sm')]: {
			width: '400px',
			padding: '7.5em 2em 3em 2em',
		},
	})),

	LoginHeader: styled(Box)(({ theme }) => ({
		position: 'absolute',
		top: '0',
		left: '50%',
		transform: 'translateX(-50%)',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		width: '140px',
		height: '70px',
		borderRadius: '0 0 20px 20px',
		'&:before': {
			content: '""',
			position: 'absolute',
			top: '0px',
			left: '-30px',
			width: '30px',
			height: '30px',
			borderTopRightRadius: '50%',
			background: 'transparent',
			boxShadow: `15px 0 0 0 white`,
		},
		'&:after': {
			content: '""',
			position: 'absolute',
			top: '0px',
			right: '-30px',
			width: '30px',
			height: '30px',
			borderTopLeftRadius: '50%',
			background: 'transparent',
			boxShadow: `-15px 0 0 0 white`,
		},
	})),

	LoginLabel: styled(Typography)(({ theme }) => ({
		fontSize: '30px',
		color: 'black',
		fontWeight: '500',
	})),

	FormContainer: styled(Paper)(({ theme }) => ({
		width: '100%',
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		gap: '20px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
	})),

	FormWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '25px',
	})),

	StyledLoginButton: styled(SysFormButton)(({ theme }) => ({
		width: '100%',
		height: '52px',
		backgroundColor: 'white',
		color: 'black',
		fontSize: '16px',
		fontWeight: '500',
		border: 'none',
		borderRadius: '30px',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			backgroundColor: '#f0f0f0',
			border: 'none',
		},
	})),

	ForgotPassword: styled(Typography)(({ theme }) => ({
		marginTop: '-5px',
		alignSelf: 'center',
		textTransform: 'none',
		textDecoration: 'none',
		padding: '0',
		cursor: 'pointer',
		color: 'white',
		fontSize: '15px',
		borderRadius: sysSizing.radiusSm,
		'&:hover': {
		},
		[theme.breakpoints.down('sm')]: {
			fontSize: '14px',
		},
	})),

	SysLoginTextField: styled(SysTextField)(({ theme }) => ({
		width: '100%',
		fontSize: '1rem',
		background: 'transparent',
		paddingInline: '10px 10px',
		color: '#fff',
		border: '2px solid #fff',
		borderRadius: '30px',
		outline: 'none',
		'& .MuiOutlinedInput-root': {
			'& fieldset': {
				borderColor: 'transparent',
			},
			'&:hover fieldset': {
				borderColor: 'transparent',
			},
			'&.Mui-focused fieldset': {
				border: 'transparent',
				borderWidth: 2,
			},
			'& input': {
				color: '#fff',
			},
			'&:-webkit-autofill': {
				'-webkit-text-fill-color': '#fff',
				'-webkit-box-shadow': '0 0 0px 1000px transparent inset',
				transition: 'background-color 5000s ease-in-out 0s',
			},
			'&:-webkit-autofill:focus': {
				'-webkit-text-fill-color': '#fff',
				'-webkit-box-shadow': '0 0 0px 1000px transparent inset',
			},
		},
		'& .MuiInputLabel-root': {
			display: 'none', // Ensure label is hidden
		},
		'& input::placeholder': {
			color: '#fff',
			opacity: 1,
		},
		'& .MuiInputAdornment-root': {
			color: '#fff',
			'& .MuiSvgIcon-root': {
				color: '#fff',
			},
		},
	})),

	FormField: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '25px',
	})),
});

export default SignInStyles;
