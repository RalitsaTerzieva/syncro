import { API_URL } from "../config";

export async function getTasks() {
  const res = await fetch(API_URL);
  return res.json();
}

export async function addTask(text) {
  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Unknown error");
  }
}
