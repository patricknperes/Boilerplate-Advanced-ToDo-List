import { ElementType } from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import styled from '@mui/material/styles/styled';
import { sysSizing } from '../../materialui/styles';
import Typography from '@mui/material/Typography';

interface ITemplateAppBarStyles {
	container: ElementType<BoxProps>;
	contentWrapper: ElementType<BoxProps>;
	contentContainer: ElementType<BoxProps>;
	Logo: ElementType<BoxProps>;
}

const TemplateAppBarStyles: ITemplateAppBarStyles = {
	Logo: styled(Box)(({ theme }) => ({
		width: 'clamp(170px, 8vw, 170px)', // Reduced width and adjusted vw for proportionality
		height: 'clamp(60px, 3vw, 60px)',  // Adjusted height to maintain aspect ratio
		backgroundColor: 'white',
		mask: "url('/images/logo-white.svg') no-repeat center / contain",
		WebkitMask: "url('/images/logo-white.svg') no-repeat center / contain",
		padding: 0,
		[theme.breakpoints.down('sm')]: {
			width: 'clamp(170px, 8vw, 170px)',
			height: 'clamp(55px, 3vw, 55px)',
		},
		[theme.breakpoints.up('md')]: {
			marginRight: 0,
			marginBottom: 0,
		}
	})),

	container: styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		justifyContent: 'flex-start',
		width: '100vw',
		height: '100vh',
		overflow: 'hidden'
	}),
	contentWrapper: styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flex: 1,
		overflow: 'auto'
	}),
	contentContainer: styled(Box)({
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		flex: 1,
		maxWidth: sysSizing.maxDisplayWidth
	})
};

export default TemplateAppBarStyles;
