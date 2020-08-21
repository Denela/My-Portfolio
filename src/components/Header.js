import React from 'react';
import {makeStyles} from  "@material-ui/core/styles";
import Typed from "react-typed";
import {
    Typography,
    Avatar,
    Grid,
    Box
    
} from "@material-ui/core";
import profile from "../components/profile.JPG"

// CSS STYLES
const useStyles = makeStyles(theme => ({
    profile: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(11),
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
        
    }
}));


const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer} >
            <Grid container justify="center">
                <Avatar className={classes.profile} src={profile} alt="Boss Dedza"/>
            </Grid>
            
            <Typography className={classes.title} variant="h4" >
                <Typed strings={["Derek Gwekwerere"]} typeSpeed={40} />
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5" >
                <Typed strings={["Web Design", "Web Development","MERN Stack"]} typeSpeed={30} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header

