// "use server";

// Simulate a server action
const wait = (ms = 3000) => new Promise((resolve) => setTimeout(resolve, ms));

export async function addTodo(prevData, formData) {
  // console.log("Received formData:", formData);
  let valid = true;
  const data = {
    todo: formData.get("todo"),
  };
  if (data.todo === "") {
    valid = false;
    return {
      success: false,
      message: "Please enter a todo",
    };
  }

  if (!localStorage.getItem("todos")) {
    let todos = [];
    todos.push({
      id: 1,
      text: `${data.todo}`,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  } else {
    let todos = JSON.parse(localStorage.getItem("todos"));
    todos.push({
      id: todos.length + 1,
      text: `${data.todo}`,
      completed: false,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  await wait(1000);

  return {
    success: true,
    message: "Todo added successfully",
  };
}

export async function getTodo() {
  if (!localStorage.getItem("todos")) return [];
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos;
}

export async function toggleTodo(id) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const todo = todos.find((todo) => todo.id === Number(id));
  todo.completed = !todo.completed;
  localStorage.setItem("todos", JSON.stringify(todos));

  return {
    success: true,
    message: "Todo updated successfully",
  };
}

export async function deleteTodo(id) {
  const todos = JSON.parse(localStorage.getItem("todos"));
  const todo = todos.find((todo) => todo.id === Number(id));
  const index = todos.indexOf(todo);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
  return {
    success: true,
    message: "Todo deleted successfully",
  };
}
