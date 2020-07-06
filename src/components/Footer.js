import React from 'react';
import { makeStyles} from "@material-ui/styles";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import Github from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
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
        (<BottomNavigation width="auto" atyle={{background: "#222" }} >
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Github/>} />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<LinkedIn/>} />
            <BottomNavigationAction className={classes.root} style={{padding: 0}} icon={<Twitter/>} />

        </BottomNavigation>)
    )
}

export default Footer
