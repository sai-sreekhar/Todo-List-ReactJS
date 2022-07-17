import { Box } from "@mui/system";
import React, { Component } from "react";
import { Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

class TodoItem extends Component {
  handleCheckBoxChange = (e) => {
    axios
      .patch(
        `http://localhost:5000/tasks/updateTask/${this.props.task._id}?userId=${this.props.task.userId}`,
        { isCompleted: this.props.task.isCompleted }
      )
      .then((res) => {
        console.log(res);
        this.props.refreshFunc();
      })
      .catch((err) => console.log("err :", err));
  };

  handleDeleteButton = (e) => {
    axios
      .delete(
        `http://localhost:5000/tasks/deleteTask/${this.props.task._id}?userId=${this.props.task.userId}`
      )
      .then((res) => {
        console.log(res);
        this.props.refreshFunc();
      })
      .catch((err) => console.log("err :", err));
  };
  render() {
    return (
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100%",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            pl: 2,
            justifyContent: "center",
            alignItems: "center",
            width: "5%",
          }}
        >
          <Checkbox
            defaultChecked={this.props.task.isCompleted}
            onChange={this.handleCheckBoxChange}
          ></Checkbox>
        </Box>
        <Box
          component="div"
          sx={{
            whiteSpace: "normal",
            width: "87%",
            alignItems: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            component="div"
            textDecoration="line-through"
          >
            {this.props.task.task}
          </Typography>
        </Box>
        <Box
          sx={{
            pr: 2,
            width: "5%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton aria-label="delete" onClick={this.handleDeleteButton}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default TodoItem;
