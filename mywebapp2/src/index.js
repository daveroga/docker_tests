import axios from "axios";

async function addTask(event) {
  event.preventDefault();
  const taskString = document.getElementById("task").value;
  const elem = document.createElement("li");
  elem.textContent = taskString;
  document.getElementById("list").appendChild(elem);
  // Send the task to the API server with axios
  const response = await axios.post("http://localhost:3500/tasks", { task: taskString });
  console.log(response);
}

window.addTask = addTask; // expose the function to the browser
