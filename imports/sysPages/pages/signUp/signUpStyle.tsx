import React from 'react';
import Paper from '@mui/material/Paper';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { sysSizing } from '../../../ui/materialui/styles';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';

interface ISignUpStyles {
	Container: React.ElementType;
	Content: React.ElementType;
	FormContainer: React.ElementType;
	FormWrapper: React.ElementType;
	StyledLoginButton: React.ElementType;
}

const growVertical = keyframes`
	0% {
		max-height: 450px;
		opacity: 1;
	}
	100% {
		max-height: 470px;
		opacity: 1;
	}
`;

export const slideInFromBelow = keyframes`
  0% {
    opacity: 1;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignUpStyle: ISignUpStyles = {
	Container: styled(Box)(({ theme }) => ({
		minHeight: '100vh',
		width: '100%',
		color: theme.palette.primary.contrastText,
		position: 'relative',

		backgroundImage: 'url(/images/wireframe/Cloudy.svg)',
		backgroundSize: 'cover',
		backgroundPosition: 'right'
	})),
	Content: styled(Box)(({ theme }) => ({
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.spacing(6),
		padding: `${sysSizing.spacingFixedLg} ${sysSizing.spacingFixedXl}`,

		[theme.breakpoints.up('md')]: {
			width: '100%',
			height: '100%',
			position: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			top: '50%',
			left: '10%'
		}
	})),
	FormContainer: styled(Paper)(({ theme }) => ({
		width: '100%',
		height: '100%',
		padding: `${sysSizing.spacingFixedLg} ${sysSizing.spacingFixedXl}`,
		borderRadius: sysSizing.radiusLg,
		boxShadow: theme.shadows[3],
		gap: sysSizing.spacingFixedXl,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-evenly',
		alignItems: 'center',
		maxWidth: '400px',
		maxHeight: '470px',
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		backdropFilter: 'blur(3px)',

		animation: `${growVertical} 0.5s ease-in-out`,
		[theme.breakpoints.up('md')]: {
			animation: `${slideInFromBelow} 0.5s ease-in-out`
		}
	})),
	FormWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.spacing(2)
	})),
	StyledLoginButton: styled(SysFormButton)(({ theme }) => ({
		background: `linear-gradient(135deg, ${theme.palette.todoColors.lightPurple}, ${theme.palette.todoColors.enchantBlue})`,
		width: '100%',
		borderRadius: '20px',
		padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
		fontWeight: 600,
		textTransform: 'none',
		boxShadow: theme.shadows[2],
		'&:hover': {
			boxShadow: theme.shadows[4]
		}
	}))
};

export const textfieldSx = {
	backgroundColor: 'white',
	'& .MuiInputBase-input': {
		color: '#000'
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: '#ddd'
		},
		'&:hover fieldset': {
			borderColor: '#aaa'
		},
		'&.Mui-focused fieldset': {
			borderColor: '#00aaff'
		}
	}
};

export default SignUpStyle;
