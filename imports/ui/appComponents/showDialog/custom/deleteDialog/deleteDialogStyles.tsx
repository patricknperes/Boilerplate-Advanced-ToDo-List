import { colorBrewer } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as appStyles from '/imports/ui/materialui/styles';

export const deleteDialogStyles = {
	box: {
		display: 'flex',
		flexDirection: 'column',
		borderRadius: appStyles.sysSizing.radiusMd,
		padding: appStyles.sysSizing.spacingFixedLg,
		gap: appStyles.sysSizing.spacingFixedLg,
		backgroundColor: '#1E1E1E',
		backdropFilter: 'blur(15px)',
		boxShadow: '0 0 6px rgba(0, 0, 0, 0.15)',
		transition: 'box-shadow 0.3s ease, transform 0.3s ease',
		'&:hover': {
			boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
			transform: 'translateY(-2px)'
		}
		//border: '1px solid rgba(255,255,255,0.8)'
	},
	actions: {
		display: 'flex',
		flexDirection: 'row',
		gap: appStyles.sysSizing.spacingRemMd,
		padding: 0
	}
};
