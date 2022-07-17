import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Component } from "react";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./components/TodoList";

class App extends Component {
  refresh = () => {
    this.todolistRef.refresh()
  }
  render() {
    return (
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 2,
            backgroundColor: "#F3F2F2",
            width: "100%",
          }}
        >
          <AddTodoForm refreshFunc={this.refresh}></AddTodoForm>
          <TodoList ref={ref => {this.todolistRef = ref}} refreshFunc={this.refresh}></TodoList>
        </Box>
      </Container>
    );
  }
}

export default App;
