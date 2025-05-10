const API_URL = "https://your-api-url";
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
}
