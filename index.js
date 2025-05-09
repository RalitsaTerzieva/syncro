import { addTask, fetchTasks } from "./js/api.js";
import { renderTasks } from "./js/tasks.js";

document.addEventListener("DOMContentLoaded", async () => {
  const tasks = await fetchTasks();
  renderTasks(tasks);
});

document.getElementById("addBtn").addEventListener("click", async () => {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();
  if (!text) return;

  await addTask(text);
  input.value = "";

  const tasks = await fetchTasks();
  renderTasks(tasks);
});
