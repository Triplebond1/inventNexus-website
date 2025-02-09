import axios from "axios";

export default async function loginUser(usernameOrEmail, password) {
  const url = `${process.env.INVENT_NEXUS_API}/auth/login`;
  const data = { usernameOrEmail, password };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      withCredentials: true, // Ensures cookies are sent and received
    });

    if (response.status !== 200) {
      return {
        success: false,
        message: response.data?.message || "Login failed",
      };
    }

    return {
      success: true,
      message: "Logged in successfully",
    };
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || "An unexpected error occurred.",
    };
  }
}

  

// import Cookies from "js-cookie";

// const userData = Cookies.get("userData"); // Read user data
// const parsedUser = userData ? JSON.parse(userData) : null;

// console.log("User:", parsedUser); 