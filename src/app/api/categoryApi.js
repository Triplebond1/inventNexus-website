const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/categories`;

export const createCategory = async (name, description) => {
  const data = { name, description };
  try {
    const response = await axios.post(Url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error creating category:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getCategoryById = async (categoryId) => {
  const url = `${Url}/${categoryId}`;
  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching category by ID:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllCategories = async () => {
  try {
    const response = await axios.get(Url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error fetching all categories:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateCategory = async (categoryId, name, description) => {
  const url = `${Url}/${categoryId}`;
  const data = { name, description };
  try {
    const response = await axios.put(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error updating category:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deleteCategory = async (categoryId) => {
  const url = `${Url}/${categoryId}`;
  try {
    const response = await axios.delete(url, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error deleting category:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
