import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const getTasks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data.todos;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const getTaskById = async (id) => {
  const response = await axios.get(`${BASE_URL}/todos/${id}`);
  return response.data;
};