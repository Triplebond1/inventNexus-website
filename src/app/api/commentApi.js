const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/comments`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};

export const createComment = async (postId, parentComment, content) => {
  const data = { postId, parentComment, content };
  try {
    const response = await axios.post(Url, data, headers);

    console.log("POST request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error creating the comment!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateCommentStatus = async (commentId, status) => {
  const data = { commentId, status };
  try {
    const response = await axios.put(`${Url}/status`, data, headers);

    console.log("PATCH request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error updating the comment status!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getCommentById = async (commentId) => {
  try {
    const response = await axios.get(`${Url}/${commentId}`, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error fetching the comment!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getCommentByPost = async (postId) => {
  const url = `${Url}/post/${postId}`;
  try {
    const response = await axios.get(url,headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error fetching comments for the post!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllComments = async (status) => {
  const url = status ? `${Url}?status=${status}` : Url;
  try {
    const response = await axios.get(url, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error fetching all comments!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateComment = async (commentId, content) => {
  const url = `${Url}/${commentId}`;
  const data = { content };
  try {
    const response = await axios.put(url, data, headers);

    console.log("PUT request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error updating the comment!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deleteComment = async (commentId) => {
  const url = `${Url}/${commentId}`;
  try {
    const response = await axios.delete(url,headers);

    console.log("DELETE request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "There was an error deleting the comment!",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
