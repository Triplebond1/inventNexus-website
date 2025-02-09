const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/post`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};

export const createPost = async (title, content, keyTakeAway, summary) => {
  const url = `${Url}`;
  try {
    const data = { title, content, keyTakeAway, summary };

    const response = await axios.post(url, data, headers);

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

export const getPostById = async (postId) => {
  const url = `${Url}/${postId}`;
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

export const getAllPost = async (
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

export const updatePostStatus = async (postId, status) => {
  const url = `${process.env.INVENT_NEXUS_API}/post/${postId}`;
  try {
    const data = {
      status,
    };

    const response = await axios.put(url, data, headers);

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

export const updatePost = async (
  postId,
  title,
  content,
  keyTakeAway,
  summary,
  postContributor,
  metaDescription,
  parentPost,
  focuskeywords,
  categories,
  tags,
  featuredImage,
  coverImage,
  postOtherImages,
  featuredVideo,
  status,
  nextPost,
  previousPost,
  relatedPosts,
  breadcrumbList
) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts/${postId}`;
  try {
    const data = {
      title,
      content,
      keyTakeAway,
      summary,
      postContributor,
      metaDescription,
      parentPost,
      focuskeywords,
      categories,
      tags,
      featuredImage,
      coverImage,
      postOtherImages,
      featuredVideo,
      status,
      nextPost,
      previousPost,
      relatedPosts,
      breadcrumbList,
    };

    const response = await axios.put(url, data, headers);

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

export const deletePost = async (postId) => {
  const url = `${process.env.INVENT_NEXUS_API}/posts/${postId}`;
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
