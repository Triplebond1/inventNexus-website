const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/page`;

const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
  withCredentials: true,
};

export const createPage = async (
  title,
  content,
  keyTakeAway,
  summary,
  slug,
  pageContributor,
  metaDescription,
  parentPage,
  focuskeywords,
  categories,
  tags,
  featuredImage,
  coverImage,
  pageOtherImages,
  featuredVideo,
  status,
  nextPage,
  previousPage,
  relatedPages,
  breadcrumbList,
  social
) => {
  const data = {
    title,
    content,
    keyTakeAway,
    summary,
    slug,
    pageContributor,
    metaDescription,
    parentPage,
    focuskeywords,
    categories,
    tags,
    featuredImage,
    coverImage,
    pageOtherImages,
    featuredVideo,
    status,
    nextPage,
    previousPage,
    relatedPages,
    breadcrumbList,
    social,
  };
  try {
    const data = { title, content, keyTakeAway, summary };

    const response = await axios.post(Url, data, headers);

    console.log("POST request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in create page:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getPageById = async (pageId) => {
  const url = `${Url}/${pageId}`;
  try {
    const response = await axios.get(url, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in get page by ID:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllPage = async () => {
  try {
    const response = await axios.get(Url, headers);

    console.log("GET request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in get all pages:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updatePageStatus = async (pageId, status) => {
  const url = `${Url}/${pageId}`;
  const data = { status };
  try {
    const response = await axios.patch(url, data, headers);

    console.log("PATCH request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in update page status:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updatePage = async (
  pageId,
  title,
  content,
  keyTakeAway,
  summary,
  slug,
  pageContributor,
  metaDescription,
  parentPage,
  focuskeywords,
  categories,
  tags,
  featuredImage,
  coverImage,
  pageOtherImages,
  featuredVideo,
  status,
  nextPage,
  previousPage,
  relatedPages,
  breadcrumbList,
  social
) => {
  const url = `${Url}/${pageId}`;
  const data = {
    title,
    content,
    keyTakeAway,
    summary,
    slug,
    pageContributor,
    metaDescription,
    parentPage,
    focuskeywords,
    categories,
    tags,
    featuredImage,
    coverImage,
    pageOtherImages,
    featuredVideo,
    status,
    nextPage,
    previousPage,
    relatedPages,
    breadcrumbList,
    social,
  };
  try {
    const response = await axios.put(url, data, headers);

    console.log("POST request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in updating page:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deletePage = async (pageId) => {
  const url = `${Url}/${pageId}`;
  try {
    const response = await axios.delete(url, headers);

    console.log("DELETE request successful. Response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error in deleting page:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
