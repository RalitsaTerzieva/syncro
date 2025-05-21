export function renderTasks(tasks) {
  if (!tasks) return;
  console.log(tasks);

  const list = document.getElementById("taskList");
  list.innerHTML = "";
  
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.text;
    list.appendChild(li);
  });
  }
  