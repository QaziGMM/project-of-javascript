// const addButton = document.getElementById("add-todo");
// const todoInput = document.querySelector("#todo-input");
// const todos = document.getElementById("todos");

// addButton.addEventListener("click", function () {
//   const listItem = document.createElement("li");
//   listItem.setAttribute("class", "list-item");
//   listItem.textContent = todoInput.value;

//   todos.appendChild(listItem);
// });

// const addtodos = document.getElementById("add-todo");

// addtodos.addEventListener("click", function () {
//   const input = document.getElementById("todo-input");

//   console.log(input.value);

//   const newli = document.createElement("li");

//   newli.setAttribute("class", "list-item");
//   newli.textContent = input.value;

//   todos.appendChild(newli);

// });
const input = document.getElementById("todo-input");
const addtdos = document.getElementById("add-todo");
const todos = document.getElementById("todos");

function addtask() {
  if (input.value === "") {
    alert("you must right something");
  } else {
    let li = document.createElement("li");

    li.setAttribute("class", "list-item");
    li.textContent = input.value;
    li.addEventListener("click", function () {
      this.remove();
    });
    todos.appendChild(li);

    input.value = "";
  }
}

// function clearAll() {
//   const allTodos = document.getElementsByClassName("list-item");

//   for (let i = 0; i < allTodos.length; i++) {
//     const todo = allTodos[i];
//     todo.remove();
//   }
// }

// function clearAll() {
//   const fulltodos = document.querySelectorAll(".list-item");

//   for (let i = 0; i < fulltodos.length; i++) {
//     const todo = fulltodos[i];
//     todo.remove();
//   }
// }

// const allTodos = document.querySelectorAll(".list-item");

// for (let i = 0; i < allTodos.length; i++) {
//   const todo = allTodos[i];
//   todo.addEventListener("click", function () {
//     this.remove();
//   });
// }

function clearAll() {
  const fulltodos = document.querySelectorAll(".list-item");

  for (let i = 0; i < allTodos.length; i++) {
    const todo = fulltodos[i];

    todo.remove();
  }
}

const allTodos = document.querySelectorAll(".list-item");

for (let i = 0; i < allTodos.length; i++) {
  const todo = allTodos[i];
  todo.addEventListener("click", function () {
    this.remove();
  });
}
