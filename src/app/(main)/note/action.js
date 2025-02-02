// "use server";

import { redirect } from "next/navigation";

export async function addTodo(prevData, formData) {
  // console.log("Received formData:", formData);
  const data = {
    todo: formData.get("todo"),
  };
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
  console.log(data);

  redirect("/note");
}

export async function getTodo() {
  if (!localStorage.getItem("todos")) return [];
  const todos = JSON.parse(localStorage.getItem("todos"));
  return todos;
}

export async function toggleTodo(id) {
  console.log("toggle todo", id);

  return;
}
