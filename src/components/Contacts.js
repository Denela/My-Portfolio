import React from 'react';
import {makeStyles, withStyles } from "@material-ui/core/styles";
import { BottomNavigationAction } from "@material-ui/core";
import {TextField, Typography, Button, Grid, Box} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";

import Footer from './Footer';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles(theme=>({
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },
    button : {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))

const InputField= withStyles({
    root: {
        "& label.Mui.focused": {
            color: "tomato",
        },
        "& label": {
            color: "tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan",
            },
            "&:hover fieldset ": {
                borderColor:"tan",
            },
            "& .Mui-focused fieldset" :{
                borderColor:"tan",
            }
        }
    },
})(TextField);


const Contacts = () => {

    const classes = useStyles()
    return (
        <Box component="div"  >
            <Navbar />
            <Grid container justify="center">
                <Box component="form" className={classes.form} >
                    <Typography variant="h6" style={{color: "tomato", textAlign: "center", textTransform: "uppercase",}} > Please get in touch with me on any of the below listed.</Typography>
                    
                    <br /> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Footer />
                    
                    <p style={{color:"tan"}} ><BottomNavigationAction href="tel:number"  className={classes.root} style={{ paddingLeft : '41%', color:"tomato", textAlign:"center" }} icon={<PhoneIcon/>} />+27 626 350 846</p>
                </Box>
                
            </Grid>
            
        </Box>
    );
};

export default Contacts;
