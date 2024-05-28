// const addButton = document.getElementById("add-todo");
// const todoInput = document.querySelector("#todo-input");
// const todos = document.getElementById("todos");

// addButton.addEventListener("click", function () {
//   const listItem = document.createElement("li");
//   listItem.setAttribute("class", "list-item");
//   listItem.textContent = todoInput.value;

//   todos.appendChild(listItem);
// });

const addtodos = document.getElementById("add-todo");

addtodos.addEventListener("click", function () {
  const input = document.getElementById("todo-input");

  console.log(input.value);

  const newli = document.createElement("li");

  newli.setAttribute("class", "list-item");
  newli.textContent = input.value;

  todos.appendChild(newli);
});
