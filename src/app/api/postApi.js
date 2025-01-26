const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const url = `${process.env.INVENT_NEXUS_API}/post`;

const createPost = async (title, content, keyTakeAway, summary) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts`;
  try {
    const data = { title, content, keyTakeAway, summary };

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


const getPostById = async (postId) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts/${postId}`;
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

const getAllPost = async (
  permalink,
  author,
  category,
  status,
  tag,
  startDate,
  endDate
) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts`;

  try {
    const params = {
      permalink,
      author,
      category,
      status,
      tag,
      startDate,
      endDate,
    };

    const response = await axios.get(url, {
      params, // Axios automatically formats the query parameters
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

const updatePostStatus = async (username, email, password) => {
  const url = `${process.env.INVENT_NEXUS_API}/users`;
  try {
    const data = {
      username,
      email,
      password,
    };

    const response = await axios.put(url, data, {
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
    // Handle specific errors here, e.g., if error.response exists, log status code
    return { success: false, message: error.message };
  }
};

const updatePost = async (postId, status) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts/${postId}`;
  try {
    const data = { status };

    const response = await axios.put(url, data, {
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

const deletePost = async (postId) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts/${postId}`;
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
