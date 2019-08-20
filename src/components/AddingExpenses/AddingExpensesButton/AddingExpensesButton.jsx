import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(6),
    right: theme.spacing(6)
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    margin: "auto",
    width: "fit-content"
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    minWidth: 120
  },
  formControlLabel: {
    marginTop: theme.spacing(1)
  }
}));

export default function FloatingActionButtons({ category , addConsumptionAction }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [maxWidth, setMaxWidth] = React.useState(category[0]);
  const [flowConsumption, setConsumption] = React.useState(0);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleMaxWidthChange(event) {
    setMaxWidth(event.target.value);
  }
  function handleFlowRate(event) {
    setConsumption(event.target.value);
  }
  function addConsumption(){
   //console.log(maxWidth,flowConsumption)
    addConsumptionAction(maxWidth,flowConsumption);
  }
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth={"md"}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">Optional sizes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can set my maximum width and whether to adapt or not.
          </DialogContentText>

          <form className={classes.form} noValidate >
            <FormControl className={classes.formControl}>
              <Select
                value={maxWidth}
                onChange={handleMaxWidthChange}
                inputProps={{
                  name: "max-width",
                  id: "max-width"
                }}
              >
                {category.map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <Input
                id="adornment-weight"
                value={flowConsumption}
                onChange={handleFlowRate}
                endAdornment={
                  <InputAdornment position="end">Руб</InputAdornment>
                }
                aria-describedby="weight-helper-text"
                inputProps={{
                  "aria-label": "weight"
                }}
              />
            </FormControl>
          </form>
        </DialogContent>

        <DialogActions>
          <Button onClick={addConsumption} color="primary" >
            Add
          </Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleClickOpen}
      >
        <AddIcon />
      </Fab>
    </React.Fragment>
  );
}
