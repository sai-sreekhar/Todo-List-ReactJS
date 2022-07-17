import React, { Component } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";  
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class AddTodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
      isAddTaskResultSuccess: false,
      shouldDisplaySnackbar: false,
    };
  }

  onAddTaskChange = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  onAddTaskClick = (e) => {
    axios
      .post(
        "http://localhost:5000/tasks/newTask?userId=62cf2a5735acac14b9b41a77",
        { task: this.state.task }
      )
      .then((res) => {
        this.setState({
          isAddTaskResultSuccess: true,
          shouldDisplaySnackbar: true,
        });
        this.props.refreshFunc()
        // console.log(res);
      })
      .catch((err) => {
        this.setState({
          isAddTaskResultSuccess: false,
          shouldDisplaySnackbar: true,
        });
        // console.log(err);
      });
  };

  handleSnackbarClose = () => {
    this.setState({
      isAddTaskResultSuccess: false,
      shouldDisplaySnackbar: false,
    });
  };

  render() {
    return (
      <Box
        component="form"
        sx={{
          mt: 2,
          mb: 4,
          display: "inline-flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-textarea"
          label="Task"
          placeholder="What needs to be done?"
          sx={{
            ml: 3,
            backgroundColor: "white",
            minWidth: 300,
            width: "74%",
          }}
          value={this.state.task}
          onChange={this.onAddTaskChange}
        ></TextField>

        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            minWidth: 150,
            width: "20%",
            mr: 3,
          }}
          onClick={this.onAddTaskClick}
        >
          Add
        </Button>
        <Snackbar
          open={this.state.shouldDisplaySnackbar}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
        >
          {this.state.isAddTaskResultSuccess ? (
            <Alert
              onClose={this.handleSnackbarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Added Task Successfully
            </Alert>
          ) : (
            <Alert
              onClose={this.handleSnackbarClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Add Task Failure
            </Alert>
          )}
        </Snackbar>
      </Box>
    );
  }
}

export { AddTodoForm };
