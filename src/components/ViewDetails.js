import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React from "react";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ViewDetails({
  viewDetailsVisibility,
  handleViewDetailsVisibility,
  selectedIndex,
  orders,
  updateAddressLocal,
  updateAddressStore,
  addressUpdated
}) {
  const handleClose = () => {
    handleViewDetailsVisibility(false);
  };
  return (
    <div>
      <Dialog
        open={viewDetailsVisibility}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Order Details"}
        </DialogTitle>
        <DialogContent>
          <Typography gutterBottom>
            {selectedIndex >= 0 &&
              orders &&
              orders[selectedIndex] &&
              orders[selectedIndex].title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {selectedIndex >= 0 &&
              orders &&
              orders[selectedIndex] &&
              orders[selectedIndex].price}{" "}
            USD
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Seller :{" "}
            {selectedIndex >= 0 &&
              orders &&
              orders[selectedIndex] &&
              orders[selectedIndex].seller}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Date :{" "}
            {selectedIndex >= 0 &&
              orders &&
              orders[selectedIndex] &&
              orders[selectedIndex].date}
          </Typography>

          <div style={{ paddingTop: "20px" }}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              value={addressUpdated || ""}
              onChange={e => updateAddressLocal(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              updateAddressStore();
              handleClose();
            }}
            color="primary"
          >
            Update Address
          </Button>
          <Button
            onClick={() => {
              updateAddressLocal("");
              handleClose();
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
