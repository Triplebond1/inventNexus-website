const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/tag`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};

export const createTag = async (name) => {
  const data = { name };
  try {
    const response = await axios.post(Url, data, headers);

    console.log("POST request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in creating tag:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getTagById = async (tagId) => {
  const url = `${Url}/${tagId}`;
  try {
    const response = await axios.get(url, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in fetching tag by ID:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllTag = async () => {
  const url = Url;
  try {
    const response = await axios.get(url, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in fetching all tags:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateTag = async (tagId, name) => {
  const data = { name };
  const url = `${Url}/${tagId}`;
  try {
    const response = await axios.put(url, data, headers);

    console.log("PUT request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in updating tag:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const daleteTag = async (tagId) => {
  const url = `${Url}/${tagId}`;
  try {
    const response = await axios.delete(url, headers);

    console.log("DELETE request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in deleting tag:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
