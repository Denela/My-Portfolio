import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {Typography, Box} from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles(theme=>({
    mainContainer: {
    background: "transparent"
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
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute"
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle : "solid",
            borderColor: "tomato tomato transparent transparent ",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            marging: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "grey",
        color: "white",
        line: 1,
        padding: "0.5rem 0 1rem",
        "&:before": {
            display: "none"
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n):before": {
                display: "none"
            }
        }
    },
    heading: {
        color : "tomato",
        padding:"3rem 0",
        textTransform: "uppercase"
    },
    subHeading: {
        color: "white",
        padding: "0",
        textTransform: "uppercase"
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading} >
                    about me
                </Typography>
                <Box component = "div" className={classes.timeLine}>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Overview
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            Who is Derek
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        My full name is Derek Makore Gwekwerere. I am a male born on 26 December 1999. I
reside in Blackheath, Capetown. I have no criminal record nor any credit issues. I am not
available to relocate outside of Cape Town.
                        
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >My BIO
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            a bit of what i believe
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        I am a determined, hardworking, God-fearing individual with exceptional perseverance skills.
I believe that for one's brain to learn something it has to be challenged, therefore I try make it
a habitat to try something new every day. I would like to study computer science and
ultimately become a full stack web developer.

                        
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >My Passion
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            Where all this started
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        I have been interested in computers and coding since primary school but never got the
opportunity to explore this dream until I was given a laptop for my 17th birthday. I started
learning coding from scratch by myself using tutorials on YouTube in my spare time. To this
day, I am still using these tutorials to increase my knowledge.

                        
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Education
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            Matric
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                            I graduated from Silikamva High School in 2019 with a bachelor pass.
                        
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Work History
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            My Work Experience
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        I worked as an intern for Tore's Foundation from September 2019 to February 2020 During my time there Ii was
responsible for organising and setting up debate motions as well as debate competitions
                        
                        </Typography>
                    </Box>
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`} >Testimonial
                    
                    </Typography>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            Jason Wandrag - Lecturer
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        Derek takes the time to try and learn and understand concepts, and never hesitates to do his best.
                        
                        </Typography>
                    </Box>
                    < Box component="div" className={classes.timeLineItem} className={classes.timeLineItem} >
                        <Typography  variant ="h5" align = "center" className={classes.subHeading} >
                            Farai Mahaso - Peer
                        </Typography>
                       
                        <Typography variant ="body1" align = "center" style={{color:"tan"}} >
                        Derek tends out to be a very patient person who focuses on getting stuff done against all odds.
                        
                        </Typography>
                    </Box>
            </Box>
            
        </Box>
        </>
    )
}

export default Resume;