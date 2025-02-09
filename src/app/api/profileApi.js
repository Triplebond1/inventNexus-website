const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/profile`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};

export const createProfile = async (
  website,
  inventnexusPage,
  location,
  social,
  bio
) => {
  const url = `${Url}`;
  const data = { website, inventnexusPage, location, social, bio };
  try {
    const response = await axios.post(url, data, headers);
    return response.data;
  } catch (error) {
    console.error(
      "Error in POST request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getProfile = async (userId) => {
  if (!userId) {
    console.error("user Id is required");
    return { success: false, message: "user Id is required" };
  }
  const url = `${Url}/${userId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error in GET request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateProfile = async (
  userId,
  userName,
  userEmail,
  userRole,
  profilePicture,
  website,
  inventnexusPage,
  location,
  social,
  bio
) => {
  if (!userId) {
    console.error("user Id is required");
    return { success: false, message: "user Id is required" };
  }

  const url = `${Url}/${userId}`;
  const data = {
    userName,
    userEmail,
    userRole,
    profilePicture,
    website,
    inventnexusPage,
    location,
    social,
    bio,
  };
  try {
    const response = await axios.put(url, data, headers);
    return response.data;
  } catch (error) {
    console.error(
      "Error in PUT request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deleteProfile = async (userId) => {
  if (!userId) {
    console.error("user Id is required");
    return { success: false, message: "user Id is required" };
  }

  const url = `${Url}/${userId}`;
  try {
    const response = await axios.delete(url, headers);
    return response.data;
  } catch (error) {
    console.error(
      "Error in DELETE request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
