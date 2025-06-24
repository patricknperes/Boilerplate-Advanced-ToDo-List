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
    ButtonLogin: React.ElementType;
}

const advancedToDoHomeStyle: ItoDoHomeStyles = {

    Background: styled(Box)(({ theme }) => ({
        width: '100%',
        backgroundColor: 'var(--body-color)',
        backgroundImage: "url(/images/wireframe/homeBg.jpg)",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: "var(--text-color)",
    })),

    Container: styled(Box)(({ theme }) => ({
        width: '100%',
        maxWidth: '1200px',
        minHeight: '100vh',
        margin: '0 auto',
        padding: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down("md")]: {
            padding: "2.5rem 1.5rem",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "2rem 1rem",
        },
    })),

    Content: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        padding: "8rem 4rem",
        justifyContent: "center",
        backgroundColor: "var(--container-color)",
        borderRadius: "var(--mb-2)",
        backgroundImage: "url(/images/wireframe/cardComponent.png), url(/images/wireframe/cardBg.png)",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "650px, cover",
        backgroundPosition: "630px 40px, center",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: '1200px',
        boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.3)',
        animation: "slideInCard 1s ease-out forwards",
        willChange: "transform, opacity",
        "@keyframes slideInCard": {
            "0%": { opacity: 0, transform: "translateY(30px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            padding: "5rem 3rem",
            backgroundSize: "450px, cover",
            backgroundPosition: "530px 40px, center",
            boxSizing: "border-box",
        },
        [theme.breakpoints.down("sm")]: {
            padding: "3.5rem 2rem",
            boxSizing: "border-box",
            backgroundPosition: "375px 40px, center",
            borderRadius: "1rem",
        },
    })),

    Header: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        fontWeight: "var(--font-semi-bold)",
        color: "var(--title-color)",
        fontSize: "var(--font-size-bigger)",
        animation: "fadeInTitle 1s ease-out 0.3s forwards",
        opacity: 0,
        "@keyframes fadeInTitle": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "var(--font-size-big)",
            marginBottom: "var(--mb-1)",
        },
    })),

    Label: styled(Typography)(({ theme }) => ({
        fontFamily: "var(--font-family)",
        color: "var(--text-color)",
        maxWidth: "500px",
        marginBottom: "var(--mb-1-5)",
        fontSize: "var(--font-size-base)",
        animation: "fadeInText 1s ease-out 0.5s forwards",
        opacity: 0,
        "@keyframes fadeInText": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("md")]: {
            maxWidth: "400px",
        },
        [theme.breakpoints.down("sm")]: {
            maxWidth: "350px",
        },
    })),

    ButtonContainer: styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "row",
        gap: "1rem",
        animation: "fadeInButtons 1s ease-out 0.7s forwards",
        opacity: 0,
        "@keyframes fadeInButtons": {
            "0%": { opacity: 0, transform: "translateY(15px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
        },
        [theme.breakpoints.down("sm")]: {
            gap: "0.5rem",
        },
        '@media (max-width: 399px)': {
            flexDirection: "column",
        },
    })),

    Button: styled(Button)(({ theme }) => ({
        textTransform: "uppercase",
        borderRadius: "5px",
        fontFamily: "var(--font-family)",
        backgroundColor: "var(--color-accent)",
        fontSize: "var(--font-size-medium-small)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--color-accent-dark)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        '@media (max-width: 399px)': {
            width: "100%",
        },
    })),

    ButtonLogin: styled(Button)(({ theme }) => ({
        textTransform: "uppercase",
        borderRadius: "5px",
        backgroundColor: "transparent",
        fontFamily: "var(--font-family)",
        padding: "0.75rem 1.5rem",
        fontWeight: "var(--font-normal)",
        fontSize: "var(--font-size-medium-small)",
        color: "var(--title-color)",
        borderColor: "var(--title-color)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
            backgroundColor: "var(--body-color)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        '@media (max-width: 399px)': {
            width: "100%",
        },
    })),
};

export default advancedToDoHomeStyle;
