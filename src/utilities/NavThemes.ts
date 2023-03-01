import { createTheme } from "@mui/system";
import MuiDrawer from '@mui/material/Drawer';
import { styled, Theme, CSSObject } from '@mui/material/styles';


export const navTheme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		text: {
			primary: '#212529',
		},
	},
	typography: {
		h2: {
			fontSize: 12,
			color: '#212529'
		},
	},
});

export const NavTheme = typeof navTheme;





const drawerWidth = 220;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
	easing: theme.transitions.easing.sharp,
	duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
	easing: theme.transitions.easing.sharp,
	duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
	width: `calc(${theme.spacing(9)} + 1px)`,
	},
});



export const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),
	}),
);