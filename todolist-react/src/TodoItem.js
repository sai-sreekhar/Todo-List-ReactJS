import { Box } from "@mui/system";
import React, { Component } from "react";
import { Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

class TodoItem extends Component {

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
          {this.props.task.isCompleted ? <Checkbox defaultChecked></Checkbox> : <Checkbox></Checkbox>}
          
        </Box>
        <Box
          component="div"
          sx={{
            whiteSpace: "normal",
            width: "87%",
            alignItems: "center",
          }}
        >
          <Typography variant="subtitle1" component="div" textDecoration= "line-through">
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
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default TodoItem;
