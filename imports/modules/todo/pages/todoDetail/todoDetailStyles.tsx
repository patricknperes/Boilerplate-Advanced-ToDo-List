import { ElementType } from 'react';
import { styled } from '@mui/material/styles';
import Box, { BoxProps } from '@mui/material/Box';
import { sysSizing } from '/imports/ui/materialui/styles';
import { SysSectionPaddingXY } from '/imports/ui/layoutComponents/sysLayoutComponents';

interface ITodoDetailStyles {
	Container: ElementType<BoxProps>;
	Header: ElementType<BoxProps>;
	Body: ElementType<BoxProps>;
	Footer: ElementType<BoxProps>;
	FormColumn: ElementType<BoxProps>;
	CreatedBy: ElementType<BoxProps>;
}

const TodoDetailStyles: ITodoDetailStyles = {
	Container: styled(SysSectionPaddingXY)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		width: '450px',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		padding: sysSizing.spacingFixedLg,
		gap: sysSizing.spacingFixedMd,
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			padding: sysSizing.spacingFixedMd
		}
	})),
	Header: styled(Box)({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width: '100%'
	}),
	Body: styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
		gap: '64px',
		padding: 0,
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			gap: sysSizing.spacingFixedMd
		}
	})),
	Footer: styled(Box)({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
		gap: sysSizing.spacingRemMd,
		marginTop: '30px'
	}),
	FormColumn: styled(Box)({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: sysSizing.spacingFixedLg,
		padding: 0
	}),
	CreatedBy: styled(Box)({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		gap: sysSizing.spacingRemSm,
		width: '100%',
		padding: 0,
		marginTop: sysSizing.spacingRemSm
	})
};

export const sysTextFieldStyled = {
	color: '#1E1E1E !important',
	'& .MuiInputBase-root': {
		backgroundColor: '#1E1E1E !important',
		borderRadius: '8px',
		'&:hover': {
			backgroundColor: '#1E1E1E !important'
		},
		'&.Mui-focused': {
			backgroundColor: '#1E1E1E !important'
		},
		'&:active': {
			backgroundColor: '#1E1E1E !important'
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

export default TodoDetailStyles;
