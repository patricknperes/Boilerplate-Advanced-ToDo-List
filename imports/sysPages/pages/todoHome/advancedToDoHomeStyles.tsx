import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { sysSizing } from '../../../ui/materialui/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

interface ItoDoHomeStyles {
    Background: React.ElementType;
    Container: React.ElementType;
    Content: React.ElementType;
    Header: React.ElementType;
    Label: React.ElementType;
    ButtonContainer: React.ElementType;
    Button: React.ElementType;
}

const advancedToDoHomeStyle: ItoDoHomeStyles = {

    Background: styled(Box)(({ theme }) => ({
        width: '100%',
        backgroundImage: 'url(/images/wireframe/bg-florest.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    })),

    Container: styled(Box)(({ theme }) => ({
        width: '100%',
        margin: '0 auto',
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
        width: '100%',
        maxWidth: '1160px',
        backdropFilter: 'blur(25px)',
        gap: '24px',
        border: '2px solid white',
        borderRadius: sysSizing.radiusMd,
        padding: '30px 60px',
        color: theme.palette.primary.contrastText,
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)',
    })),

    Header: styled(Typography)(({ theme }) => ({
        fontSize: '64px',
        fontWeight: '600',
        color: '#fff',
    })),

    Label: styled(Typography)(({ theme }) => ({
        fontSize: '18px',
        fontWeight: '400',
        color: '#eee',
    })),

    ButtonContainer: styled(Box)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
    })),

    Button: styled(Button)(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
        fontSize: '1rem',
        fontWeight: 'bold',
    })),
};

export default advancedToDoHomeStyle;
