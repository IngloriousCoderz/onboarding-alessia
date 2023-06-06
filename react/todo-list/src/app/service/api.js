import axios from "axios";

export async function retrieveTasks() {
  const { data } = await axios.get("http://localhost:3000/tasks");
  return data;
}

export async function createTask(body) {
  const { data } = await axios.post("http://localhost:3000/tasks", body);
  return data;
}

export async function updateTask(id, body) {
  const { data } = await axios.patch(`http://localhost:3000/tasks/${id}`, body);
  return data;
}

export async function deleteTask(id) {
  const { data } = await axios.delete(`http://localhost:3000/tasks/${id}`);
  return data;
}
