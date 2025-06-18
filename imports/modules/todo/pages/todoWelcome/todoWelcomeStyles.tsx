import { ElementType } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { sysSizing } from '/imports/ui/materialui/styles';
import { SysSectionPaddingXY } from '/imports/ui/layoutComponents/sysLayoutComponents';

interface ITodoWelcomeStyles {
	Container: ElementType<BoxProps>;
	ListContainer: ElementType<BoxProps>;
	ListWrapper: ElementType<BoxProps>;
	NothingHere: ElementType<BoxProps>;
	Heading1: ElementType<BoxProps>;
	Heading2: ElementType<BoxProps>;
	LoadingContainer: ElementType<BoxProps>;
}

const TodoWelcomeStyles: ITodoWelcomeStyles = {
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
	ListContainer: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		minHeight: '63vh',
		justifyContent: 'flex-start',
		backgroundColor: '#242731',
		backdropFilter: 'blur(10px)',
		//border: '1px solid rgba(255, 255, 255, 0.2)',
		borderRadius: '12px',
		boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
		padding: '1rem 2rem',
		marginBottom: theme.spacing(3),
		color: 'rgba(255, 255, 255, 0.87)',
		transition: 'transform 0.2s ease, box-shadow 0.2s ease',
		gap: sysSizing.spacingFixedMd,
		'&:hover': {
			boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
			transform: 'translateY(-2px)'
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
		backgroundImage: 'url(/images/wireframe/empty-box_7486744.png)',
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
			height: '200px'
		}
	})),
	Heading1: styled(Box)(({ theme }) => ({
		color: 'white',
		fontWeight: 'bold',
		width: '100%',
		fontSize: '2.5rem',
		textAlign: 'start',
		selfAlign: 'flex-start',

		[theme.breakpoints.down('sm')]: {
			fontSize: '2.0rem'
		}
	})),
	Heading2: styled(Box)(({ theme }) => ({
		color: 'white',
		fontSize: '1.0rem',
		width: '100%',
		textAlign: 'start',
		selfAlign: 'flex-start',
		marginBottom: sysSizing.spacingFixedSm,
		[theme.breakpoints.down('sm')]: {
			fontSize: '0.8rem'
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
	}))
};

export default TodoWelcomeStyles;
