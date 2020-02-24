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

export default function OrderItem({
  details,
  goBackToOrders,
  navigateToNotesWithOrderId
}) {
  const classes = useStyles();
  const {
    title,
    price,
    seller,
    date,
    rating,
    imgUrl,
    orderId,
    address
  } = details;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Item"
          height="140"
          image={imgUrl}
          title="Item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {price} USD
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Seller : {seller}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Date : {date}
          </Typography>
          <Rating name="read-only" value={rating} readOnly />
          <Typography variant="body2" color="textSecondary" component="p">
            Address : {address}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            OrderId : {orderId}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            goBackToOrders();
          }}
        >
          Back to All Orders
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => navigateToNotesWithOrderId(orderId)}
        >
          Go To Mapped Notes
        </Button>
      </CardActions>
    </Card>
  );
}
