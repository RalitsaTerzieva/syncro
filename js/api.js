import { API_URL } from "../config.js";

export async function fetchTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addTask(text) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Unknown error");
  }
}
