const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/users`;

export const createUser = async (username, email, password) => {
  const url = `${Url}`;
  const data = { username, email, password };
  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    console.log("POST request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in POST request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getUser = async (userId) => {
  if (!userId) {
    console.error("User ID is required");
    return { success: false, message: "User ID is required" };
  }
  const url = `${Url}/${userId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in GET request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllUsers = async () => {
  const url = `${Url}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in GET request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateUser = async (
  userId,
  username,
  email,
  password,
  role,
  profilePicture
) => {
  const url = `${Url}/${userId}`;
  const updateData = { username, email, password, role, profilePicture };
  try {
    const response = await axios.put(url, updateData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    console.log("PUT request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in PUT request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deleteUser = async (userId) => {
  if (!userId) {
    console.error("User ID is required");
    return { success: false, message: "User ID is required" };
  }
  const url = `${Url}/${userId}`;
  try {
    const response = await axios.delete(url, {
      headers: {
        Accept: "application/json",
      },
    });

    console.log("DELETE request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in DELETE request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
