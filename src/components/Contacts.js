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
                    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "uppercase",}} > hire or contact me...</Typography>
                    <InputField fullwidth={true} label="Name" variant="outlined" inputProps={{style: {color:"white"}}} margin="dense" size="medium" />
                    <br />
                    <InputField fullwidth={true} label="Email" variant="outlined"  inputProps={{style: {color:"white"}}} margin="dense" size="medium" />
                    <br />
                    <InputField fullwidth={true} label="Message" variant="outlined"  inputProps={{style: {color:"white"}}} margin="dense" size="medium" />
                    <br />
                    <Button className={classes.button} variant= "outlined" fullwidth={true} endIcon={<SendIcon />} >
                        contact me
                    </Button>
                    <br /> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <Footer />
                    
                    <p style={{color:"tan"}} ><BottomNavigationAction className={classes.root} style={{padding: 0, color:"tomato" }} icon={<PhoneIcon/>} />+27 635 0846</p>
                </Box>
                
            </Grid>
            
        </Box>
    );
};

export default Contacts;
