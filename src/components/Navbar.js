import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import MobileRightMenuSlider from "@material-ui/core/Drawer";
import {
    AppBar,
    ListItem,    
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon,
    
} from "@material-ui/core";
import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons";
import profile from '../components/profile.JPG';
import Footer from './Footer';

// CSS STYLES
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"

    },
    profile: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    ListItem: {
        color: "tan"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: < Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const togglerSlider = (slider, open) => () => {
        setState({...state, [slider]: open});
    };
    const classes = useStyles();

    const sideList = slider => (

        <Box className={classes.menuSliderContainer} component='div' onClick={togglerSlider(slider, false)}  >
            <Avatar className={classes.profile} src={profile} alt="The Boss dedza"/>
            <Divider/>
            <List>
                {menuItems.map((IsItem, key)=>(

                    <ListItem button key={key} component= {Link} to = {IsItem.listPath} >
                    <ListItemIcon className={classes.ListItem} >
                        {IsItem.listIcon}

                    </ListItemIcon>
                    <ListItemText
                       className={classes.ListItem}
                       primary={IsItem.listText}
                    />
                </ListItem>
                ))}
            </List>

        </Box>
    )
    
    return (
        <>
        <Box component="nav" >
            <AppBar position="static" style={{background:"#222"}} >
                <IconButton onClick={togglerSlider("right", true)} >
                     <ArrowBack style =  {{color: "tomato"}} />
                </IconButton>
                <Typography variant="h5" style={{color: 'tan' }} >
                    Portfolio
                </Typography>
                <MobileRightMenuSlider
                anchor="left"
                open={state.right} onClose={togglerSlider("right",false )} >
                    {sideList("right")}
                    <Footer/>
                </MobileRightMenuSlider>
            </AppBar>
        </Box>
      </>
    )
}

export default Navbar;

