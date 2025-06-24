import React from 'react';
import Paper from '@mui/material/Paper';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { sysSizing } from '../../../ui/materialui/styles';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';
import SysTextField from '../../../ui/components/sysFormFields/sysTextField/sysTextField';
import Typography from '@mui/material/Typography';

interface ISignUpStyles {
	Background: React.ElementType;
	Container: React.ElementType;
	Content: React.ElementType;
	LoginHeader: React.ElementType;
	LoginLabel: React.ElementType;
	FormContainer: React.ElementType;
	FormWrapper: React.ElementType;
	ForgotPassword: React.ElementType;
	StyledLoginButton: React.ElementType;
	SysLoginTextField: React.ElementType;
}

const SignUpStyle: ISignUpStyles = {
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
		border: '2px solid var(--title-color)',
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
		backgroundColor: 'var(--title-color)',
		width: '180px',
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
			boxShadow: `15px 0 0 0 var(--title-color)`,
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
			boxShadow: `-15px 0 0 0 var(--title-color)`,
		},
	})),

	LoginLabel: styled(Typography)(({ theme }) => ({
		fontSize: '34px',
		color: 'var(--body-color)',
		fontWeight: 'var(--font-medium)',
		[theme.breakpoints.down('md')]: {
			fontSize: '30px',
		},
	})),

	FormContainer: styled(Paper)(({ theme }) => ({
		width: '100%',
		backgroundColor: 'transparent',
		border: 'none',
		boxShadow: 'none',
		gap: 'var(--mb-1-5)',
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
		gap: 'var(--mb-1-5)',
	})),

	StyledLoginButton: styled(SysFormButton)(({ theme }) => ({
		width: '100%',
		height: '52px',
		backgroundColor: 'var(--title-color)',
		color: 'var(--body-color)',
		fontSize: '16px',
		fontWeight: 'var(--font-semi-bold)',
		border: 'none',
		borderRadius: '30px',
		cursor: 'pointer',
		transition: '0.3s',
		'&:hover': {
			backgroundColor: 'var(--color-accent)',
			color: 'var(--title-color)',
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
		fontSize: 'var(--font-size-base)',
		borderRadius: sysSizing.radiusSm,
	})),

	SysLoginTextField: styled(SysTextField)(({ theme }) => ({
		width: '100%',
		fontSize: 'var(--font-size-base)',
		background: 'transparent',
		paddingInline: '10px 10px',
		color: 'var(--body-color)',
		border: '2px solid var(--title-color)',
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
				color: 'var(--title-color)',
			},
			'&:-webkit-autofill': {
				'-webkit-text-fill-color': 'var(--title-color)',
				'-webkit-box-shadow': '0 0 0px 1000px transparent inset',
				transition: 'background-color 5000s ease-in-out 0s',
			},
			'&:-webkit-autofill:focus': {
				'-webkit-text-fill-color': 'var(--title-color)',
				'-webkit-box-shadow': '0 0 0px 1000px transparent inset',
			},
		},
		'& .MuiInputLabel-root': {
			display: 'none', // Ensure label is hidden
		},
		'& input::placeholder': {
			color: 'var(--title-color)',
			opacity: 1,
		},
		'& .MuiInputAdornment-root': {
			color: 'var(--title-color)',
			'& .MuiSvgIcon-root': {
				color: 'var(--title-color)',
			},
		},
	})),
};

export default SignUpStyle;
