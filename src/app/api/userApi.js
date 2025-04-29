const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.NEXT_PUBLIC_INVENT_NEXUS_API}/users`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};


// Base URL from environment variable or configuration
const API_BASE_URL =`${process.env.NEXT_PUBLIC_INVENT_NEXUS_API}`;
// Axios instance with default configuration
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: false, // Set to true only if required by the API
});

/**
 * Creates a new user with the provided credentials
 * @param {string} username - The user's username
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<{ success: boolean, message?: string, data?: any }>}
 */
export const createUser = async (username, email, password) => {
  // Input validation
  if (typeof username !== "string" || !username.trim()) {
    return { success: false, message: "Username is required and must be a string" };
  }
  if (typeof email !== "string" || !email.trim()) {
    return { success: false, message: "Email is required and must be a string" };
  }
  if (typeof password !== "string" || !password) {
    return { success: false, message: "Password is required and must be a string" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Invalid email format" };
  }
  if (password.length < 8) {
    return { success: false, message: "Password must be at least 8 characters" };
  }

  const data = {
    username: username.trim(),
    email: email.trim(),
    password,
  };

  try {
    const response = await apiClient.post("/users", data);

    // Validate response status
    if (response.status >= 200 && response.status < 300) {
      console.log("User created successfully:", response.data);
      return {
        success: true,
        data: response.data,
        message: "Registration successful",
      };
    } else {
      console.warn("Unexpected response status:", response.status);
      return {
        success: false,
        message: response.data?.message || "Failed to create user",
      };
    }
  } catch (error) {
    console.error("Error creating user:", error);

    // Handle different types of errors
    if (error.response) {
      // Server responded with a status code outside 2xx
      const message =
        error.response.data?.message ||
        `Server error: ${error.response.status}`;
      return { success: false, message };
    } else if (error.request) {
      // No response received (e.g., network error)
      return { success: false, message: "Network error. Please try again." };
    } else {
      // Other errors (e.g., request setup)
      return { success: false, message: error.message };
    }
  }
};

// export const createUser = async (username, email, password) => {
//   const url = `${Url}`;
//   const data = { username, email, password };
//   try {
//     const response = await axios.post(url, data, headers);

//     console.log("POST request successful. Response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error(
//       "Error in POST request:",
//       error.response?.data || error.message
//     );
//     return { success: false, message: error.message };
//   }
// };

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
    const response = await axios.get(url, headers);

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
    const response = await axios.put(url, updateData, headers);

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
    const response = await axios.delete(url, headers);

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

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { email, password } = await req.json();

//   // Simulate successful registration
//   if (email && password) {
//     return NextResponse.json({ success: true });
//   } else {
//     return NextResponse.json({ error: "Invalid data" }, { status: 400 });
//   }
