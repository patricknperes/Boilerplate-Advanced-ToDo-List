import React from 'react';
import Paper from '@mui/material/Paper';
import { styled, keyframes } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { sysSizing } from '../../../ui/materialui/styles';
import SysFormButton from '../../../ui/components/sysFormFields/sysFormButton/sysFormButton';

interface ISignInStyles {
	Container: React.ElementType;
	Content: React.ElementType;
	FormContainer: React.ElementType;
	FormWrapper: React.ElementType;
	StyledLoginButton: React.ElementType;
	Logo: React.ElementType;
}

const shrinkFromHome = keyframes`
  0% {
    width: 100%;
    min-height: 75vh;
    max-height: 75vh;
	max-width: 1300px;
    transform: scale(1);
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(30px);
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.8);
    opacity: 1;
	transform: translateY(-30px);
  }
  50% {
    transform: scale(0.7);
    opacity: 0.9;
  }
  100% {
    width: 100%;
    max-width: 400px;
    max-height: 450px;
    transform: scale(1);
    border-radius: ${sysSizing.radiusLg};
    background-color: rgba(255, 255, 255, 0.90);
    backdrop-filter: blur(3px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transform: translateY(0);
  }
`;

const growVertical = keyframes`
	0% {
		max-height: 470px;
		opacity: 1;
	}
	100% {
		max-height: 450px;
		opacity: 1;
	}
`;

const descendFromTop = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SignInStyles = (from: string): ISignInStyles => ({
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
		maxHeight: '450px',
		backgroundColor: 'rgba(255, 255, 255, 0.95)',
		backdropFilter: 'blur(3px)',
		animation: from === 'home' ? `${shrinkFromHome} 0.5s ease-in-out` : `${growVertical} 0.5s ease-in-out`
	})),
	FormWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: theme.spacing(2),
		opacity: 1
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
	})),
	Logo: styled(Box)(({ theme }) => ({
		width: '100%',
		maxWidth: '400px',
		...(from === 'home' && {
			animationDelay: '1.5s',
			animation: `${descendFromTop} 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards`
		})
	}))
});

export default SignInStyles;
