document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  function addTask() {
    let taskText = taskInput.value.trim();
    let listItem = document.createElement("li");
    listItem.textContent = taskText;
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  document.addEventListener("DOMContentLoaded", addTask);
});

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  storedTasks.forEach((taskText) => addTask(taskText, false));

  function addTask(taskText, save = true) {
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }
}
