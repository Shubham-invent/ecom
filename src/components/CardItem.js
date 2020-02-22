import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  }
});

export default function CardItem() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Item"
          height="140"
          image="https://exploringjs.com/impatient-js/img-homepage/cover-homepage.jpg"
          title="Item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Painting 1
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            400 USD
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Seller : Team Intuit
          </Typography>
          <Rating name="read-only" value={4} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
