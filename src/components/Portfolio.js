import React from 'react';
import {makeStyles} from "@material-ui/styles";
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"; 
import Navbar from "./Navbar";
import project1 from "../cert2.png";
import project2 from "../cert3.png";
import project3 from "../cert4.png";
import project4 from "../fifth.jpg";
import "./Bar.css";


const useStyles = makeStyles({
    mainContainer:{
        background: "transparent",
        height: "100%"
    },
    cardContainer: {
        maxWidth:345,
        margin: "5rem auto"
    }

})

const Portfolio = () => {
    const classes = useStyles()
    return (
        <Box component="div" className={classes.mainContainer} >
            <Navbar/>
            <Grid container justify="center" >
                {/* Project 1 */}
                <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 1" height="140" image={project1} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Responsive Web Design Course
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Over 300 hours of hands on  practical assesments
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                          
                            <Button size="small" color="primary"  href="https://www.freecodecamp.org/certification/denela/responsive-web-design" >
                                Live demo
                            </Button>
                           
                        </CardActions>


                        

                </Card> 
                </Grid>
                 {/* Project 2 */}
                 <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project2} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Javascript Course
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Over 150 practical assesments, quizes as well as projects 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            
                            <Button size="small" color="primary" href="https://www.sololearn.com/Profile/17750635" >
                                Live demo
                            </Button>
                        </CardActions>
                </Card> 
            </Grid>
             {/* Project 3 */}
             <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project3} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Python Course
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Over 160 practical assesments as well as projects
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                           
                            <Button size="small" color="primary" href="https://www.sololearn.com/Profile/17750635" >
                                Live demo
                            </Button>
                        </CardActions>
                </Card> 
            </Grid>
              {/* Project 4 */}
              <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project4} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Forex Traders Social Madia App
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                This platform allows forex traders to share ideas of how they execute their trades, and also share trading signals as well as their successs stories
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" >
                                Share
                            </Button>
                            <Button size="small" color="primary" >
                                Live demo
                            </Button>
                        </CardActions>
                </Card> 
            </Grid>
            
         </Grid>
         <Grid container justify="center" >
         <div  className="skills"  >
                <h1>My Skills</h1>

                <li>

                <h3>HTML5</h3><span className="bar"><span className="html" ></span></span>

                </li>
                <li>

                <h3>CSS3</h3><span className="bar"><span className="css" ></span></span>

                </li>
                <li>

                <h3>PYTHON</h3><span className="bar"><span className="python" ></span></span>

                </li>
                <li>

                <h3>JAVASCRIPT</h3><span className="bar"><span className="javascript" ></span></span>

                </li>
                <li>

                <h3>REACT</h3><span className="bar"><span className="react" ></span></span>

                </li>
            </div>
            </Grid>
            
    </Box>
    );
};

export default Portfolio;
