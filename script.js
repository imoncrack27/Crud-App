// Get DOM elements by their IDs
const taskInput = document.getElementById("taskInput"); // input field where user types a task
const addBtn = document.getElementById("addBtn"); // "Add Task" button
const taskList = document.getElementById("taskList"); // the <ul> element where tasks will be listed

// Array to store tasks
let tasks = [];

// This function updates (renders) the task list on the page
function renderTasks() {
  taskList.innerHTML = ""; // Clear current list before re-rendering

  // Loop through each task and add it to the DOM
  tasks.forEach((task, index) => {
    const li = document.createElement("li"); // Create a list item
    li.className = "task-item"; // Add CSS class for styling

    // Add task content and two buttons (edit and delete)
    li.innerHTML = `
      <span contenteditable="true" onblur="editTask(${index}, this.textContent)">
        ${task}
      </span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(li); // Add the task to the task list in the UI
  });
}

// This function is triggered when "Add Task" is clicked
function addTask() {
  const task = taskInput.value.trim(); // Get and clean the input value

  if (task !== "") {
    // Only add if not empty
    tasks.push(task); // Add new task to array
    taskInput.value = ""; // Clear the input field
    renderTasks(); // Refresh the UI to show the new task
  }
}

// This function deletes a task by index
function deleteTask(index) {
  tasks.splice(index, 1); // Remove 1 item at that index
  renderTasks(); // Re-render the task list
}

// This function is called when a user finishes editing a task
function editTask(index, newText) {
  tasks[index] = newText.trim(); // Save the updated task text
  renderTasks(); // Re-render the list (optional for consistency)
}

// Listen for clicks on the "Add Task" button
addBtn.addEventListener("click", addTask);
