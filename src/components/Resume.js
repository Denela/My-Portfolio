import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    mainContainer: {
    background: "#233"
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "$:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both"
        }
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer} >
                <Typography variant="h4" align="center">
                    About Me

                </Typography>
                <Box component = "div"className={classes.timeLine}>
                    <Typography variant="h2" align="center" >I am a determined, hardworking, God-fearing individual with exceptional perseverance skills.</Typography>
            </Box>
        </Box>
        </>
    )
}

export default Resume
