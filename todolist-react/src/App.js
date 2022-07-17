import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { AddTodoForm } from "./components/AddTodoForm";
import { TodoList } from "./TodoList";

function App() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          mt: 2,
          backgroundColor: '#F3F2F2',
          width: "100%",
        }}
      >
        <AddTodoForm></AddTodoForm>
        <TodoList></TodoList>
        
      </Box>
    </Container>
  );
}

export default App;
