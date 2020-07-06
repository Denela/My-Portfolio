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
import project1 from "../first.jpg";
import project2 from "../second.jpg";
import project3 from "../third.jpg";
import project4 from "../fifth.jpg";


const useStyles = makeStyles({
    mainContainer:{
        background: "#223",
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
                                Project 1
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam rerum minima odit pariatur ex, ducimus fuga
                                 animi modi facilis temporibus totam consequatur aperiam architecto eum, reprehenderit alias autem dolorem.
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
                 {/* Project 2 */}
                 <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project2} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 2
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam rerum minima odit pariatur ex, ducimus fuga
                                 animi modi facilis temporibus totam consequatur aperiam architecto eum, reprehenderit alias autem dolorem.
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
             {/* Project 3 */}
             <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project3} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 3
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam rerum minima odit pariatur ex, ducimus fuga
                                 animi modi facilis temporibus totam consequatur aperiam architecto eum, reprehenderit alias autem dolorem.
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
              {/* Project 4 */}
              <Grid item xs={12} sm={8} md={6}>
                <Card className={classes.cardContainer} >
                    <CardActionArea>
                        <CardMedia component="img" alt="Project 2" height="140" image={project4} />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Project 4
                            </Typography>
                            <Typography  variant="body2" color="textSecondary" component="p" >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsam rerum minima odit pariatur ex, ducimus fuga
                                 animi modi facilis temporibus totam consequatur aperiam architecto eum, reprehenderit alias autem dolorem.
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
            
    </Box>
    );
};

export default Portfolio;
