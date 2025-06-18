import { ElementType } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { sysSizing } from '/imports/ui/materialui/styles';
import { SysSectionPaddingXY } from '/imports/ui/layoutComponents/sysLayoutComponents';
import { max } from 'lodash';

interface ITodoListStyles {
	Container: ElementType<BoxProps>;
	LoadingContainer: ElementType<BoxProps>;
	SearchContainer: ElementType<BoxProps>;
	ListContainer: ElementType<BoxProps>;
	ListWrapper: ElementType<BoxProps>;
	NothingHere: ElementType<BoxProps>;
	StatusBox: ElementType<BoxProps>;
	VisibilityOff: ElementType<BoxProps>;
	AllDone: ElementType<BoxProps>;
}

const TodoListStyles: ITodoListStyles = {
	Container: styled(SysSectionPaddingXY)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		width: '100%',
		minHeight: '100vh',
		overflowY: 'auto',
		gap: sysSizing.spacingFixedMd,
		backgroundColor: '#1F222B',
		backgroundImage: 'linear-gradient(to bottom, #262D40, #1F2737)',
		backgroundAttachment: 'fixed',
		padding: '4rem, 1rem',
		[theme.breakpoints.down('sm')]: {
			padding: '3vh 1rem'
		}
	})),
	LoadingContainer: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		gap: theme.spacing(2)
	})),
	SearchContainer: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'flex-end',
		maxWidth: '49%',
		gap: sysSizing.spacingFixedMd,
		marginBottom: theme.spacing(3),
		'& .MuiInputBase-root': {
			backgroundColor: 'rgba(255, 255, 255, 0.07)',
			borderColor: 'rgba(255, 255, 255, 0.1)',
			color: 'rgba(255, 255, 255, 0.87)',
			'&:hover': {
				backgroundColor: 'rgba(255, 255, 255, 0.1)'
			},
			'& .MuiInputAdornment-root': {
				color: 'rgba(255, 255, 255, 0.6)'
			}
		},
		[theme.breakpoints.down('md')]: {
			maxWidth: '100%'
		},
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			maxWidth: '100%'
		}
	})),
	ListContainer: styled(Box)(({ theme }) => ({
		width: '49%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		backgroundColor: '#242731',
		backdropFilter: 'blur(10px)',
		//border: '1px solid rgba(255, 255, 255, 0.2)',
		borderRadius: '12px',
		boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
		padding: theme.spacing(3),
		marginBottom: theme.spacing(3),
		color: 'rgba(255, 255, 255, 0.87)',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		gap: sysSizing.spacingFixedMd,
		'&:hover': {
			boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
			transform: 'translateY(-1px)'
		},
		[theme.breakpoints.down('md')]: {
			width: '100%',
			marginBottom: theme.spacing(2),
			padding: theme.spacing(2)
		}
	})),
	ListWrapper: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'stretch',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			alignItems: 'center'
		}
	})),
	NothingHere: styled(Box)(({ theme }) => ({
		backgroundImage: 'url(/images/wireframe/planeta.png)',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		color: 'rgba(255, 255, 255, 0.87)',
		borderRadius: '12px',
		textAlign: 'center',
		padding: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			height: '250px'
		}
	})),
	AllDone: styled(Box)(({ theme }) => ({
		backgroundImage: 'url(/images/wireframe/action.png)',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '75%',
		height: '75%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		marginLeft: 45,
		alignItems: 'center',
		color: 'rgba(255, 255, 255, 0.87)',
		borderRadius: '12px',
		textAlign: 'center',
		padding: theme.spacing(2),
		[theme.breakpoints.down('sm')]: {
			height: '250px'
		}
	})),
	StatusBox: styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '100%',
		minHeight: '350px',
		justifyContent: 'flexstart',
		alignItems: 'center'
	})),
	VisibilityOff: styled(Box)(({ theme }) => ({
		backgroundImage: 'url(/images/wireframe/espreitador.png)',
		backgroundSize: 'contain',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		width: '100%',
		height: '100%'
	}))
};

export const dialogSx = {
	display: 'flex',
	flexDirection: 'column',
	borderRadius: sysSizing.radiusMd,
	padding: sysSizing.spacingFixedLg,
	gap: sysSizing.spacingFixedLg,
	backgroundColor: '#1E1E1E',
	backdropFilter: 'blur(15px)',
	boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
	//border: '1px solid rgba(255,255,255,0.8)',
	width: '100%',
	maxWidth: 500,
	margin: '0 auto',
	'@media (max-width: 600px)': {
		width: '90%'
	},
	//hover
	transition: 'box-shadow 0.3s ease, transform 0.3s ease',
	'&:hover': {
		boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
		transform: 'translateY(-2px)'
	}
};

export const sysTextFieldStyled = {
	color: '#242731 !important',
	'& .MuiInputBase-root': {
		backgroundColor: '#242731 !important',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: '#242731 !important'
		},
		'&.Mui-focused': {
			backgroundColor: '#242731 !important'
		},
		'&:active': {
			backgroundColor: '#242731 !important'
		}
	},

	'& .MuiInputBase-input': {
		backgroundColor: 'transparent',
		color: '#FFFFFF',
		'&:hover, &:focus, &:active': {
			backgroundColor: 'transparent'
		}
	},

	'& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
		borderColor: 'rgba(107, 107, 107, 0.3)'
	}
};

export default TodoListStyles;
