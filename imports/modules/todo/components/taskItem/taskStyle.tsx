import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { sysShadows, sysSizing } from '../../../../ui/materialui/styles';
import { Padding } from '@mui/icons-material';

interface ITaskStyled {
	Container: React.ElementType;
	Content: React.ElementType;
	Check: React.ElementType;
	Task: React.ElementType;
	ActionBox: React.ElementType;
}

const TaskStyled: ITaskStyled = {
	Container: styled(Box)(({ theme }) => ({
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'stretch',
		padding: sysSizing.spacingFixedXs,
		gap: sysSizing.spacingFixedSm,
		cursor: 'pointer',
		borderRadius: '8px',
		transition: 'background-color 0.2s ease',
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.07)'
		},
		'&:active': {
			backgroundColor: 'rgba(0, 0, 0, 0.1)'
		}
	})),
	Content: styled(Box)({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '100%'
	}),
	Check: styled(Box)({
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '4%',

		marginLeft: 0,
		padding: 0
	}),
	Task: styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '85%',
		gap: 0,
		marginLeft: 15,
		padding: sysSizing.spacingFixedXs,
		overflow: 'hidden',
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
			width: '55%',
			marginLeft: 0
		}
	})),
	ActionBox: styled(Box)(({ theme }) => ({
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
		width: '3%',
		gap: sysSizing.spacingFixedMd,
		'> svg': {
			cursor: 'pointer',
			color: theme.palette.sysAction?.primaryIcon
		},
		marginRight: 60
	}))
};

export default TaskStyled;
