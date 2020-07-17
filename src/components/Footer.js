import React from 'react';
import { makeStyles} from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import Instagram from "@material-ui/icons/Instagram";
const useStyles = makeStyles({
root: {
"& .MuiBottomNavigationAction-root": {
    minWidth: 0,
    maxwidth:250,
},
"& .MuiSvgIcon-root" : {
    fill: "tan",
    "&:hover": {
        fill: "tomato",
        fontSize: "1.8rem",
    }
}
}
})
const Footer = () => {
    const classes = useStyles()
    return (
        (<BottomNavigation width="auto" style={{background: "transparent" }} >
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Github  />} href="https://github.com/Denela" />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<LinkedIn/>} href="https://www.linkedin.com/in/derek-gwekwerere-a53276100/" />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Twitter/>} />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Instagram/>} href="https://www.instagram.com/denellla/" />

        </BottomNavigation>)
    )
}

export default Footer
