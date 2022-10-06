import React from "react";

// Material UI Components
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button
} from "@material-ui/core";

// Material UI Icons
import { PhotoCamera } from "@material-ui/icons";

// Styles
import useStyles from './Styles.js'

export default function App() {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} fontSize="large"/>
          <Typography variant="h4">PHOTO</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem arefee eefalde lasdeo ñlasdnfeu ahbeba djeaoudskjnd
              jaeudsajd Lorem arefee eefalde lasdeo ñlasdnfeu ahbeba
              djeaoudskjnd jaeudsajd Lorem arefee eefalde lasdeo ñlasdnfeu
              ahbeba djeaoudskjnd jaeudsajd Lorem arefee eefalde lasdeo
              ñlasdnfeu ahbeba djeaoudskjnd jaeudsajd
            </Typography>
            <div>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid}>
          <Grid container spacing={4}>
            {Array(20).fill(0).map((_, i) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
                <Card className={classes.card}>
                  <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image"/>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                        Heading
                    </Typography>
                    <Typography gutterBottom variant="h5">
                        This is a media card. You can use this section for create your content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
             </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
              Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
              Somethin here to give the footer a purpose!
          </Typography>
      </footer>
    </>
  );
}
