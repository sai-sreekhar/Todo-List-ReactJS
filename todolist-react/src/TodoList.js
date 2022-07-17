import { Box } from "@mui/system";
import React, { Component } from "react";
import { Divider, Typography } from "@mui/material";
import TodoItem from "./TodoItem";
import axios from "axios";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasksList: [],
    };
  }

  refresh() {
    this.getAllTasks();
  }

  async getAllTasks() {
    try {
      const res = await axios.get(
        "http://localhost:5000/tasks/?userId=62cf2a5735acac14b9b41a77"
      );
      this.setState({
        tasksList: res.data.data,
      });
      // console.log('response: ', res.data.data);
    } catch (error) {
      console.log("error", error);
    }
  }

  componentDidMount() {
      this.getAllTasks();
  }

  render() {
    const { tasksList } = this.state;
    return (
      <Box
        sx={{
          pt: 2,
          border: 1,
          borderColor: "#E6E4E4",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "white",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            pl: 2,
          }}
        >
          <Typography variant="h5" component="div" align="left">
            Todo List
          </Typography>
        </Box>
        <Divider></Divider>
        {tasksList.length ? (
          tasksList.map((taskItem) => <TodoItem task={taskItem} refreshFunc={this.props.refreshFunc}></TodoItem>)
        ) : (
          <Typography variant="h5" component="div" align="center">
            No Tasks Added
          </Typography>
        )}
      </Box>
    );
  }
}

export { TodoList };
