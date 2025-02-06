import axios from "axios";
import Cookies from "js-cookie";

export default async function loginUser(usernameOrEmail, password) {
  const url = `${process.env.INVENT_NEXUS_API}/auth/login`;
  const data = { usernameOrEmail, password };

  try {
    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    if (response.status !== 200) {
      return {
        success: false,
        message: response.data?.message || "Login failed",
      };
    }

    const token = response.data?.token;

    if (token) {
      // Save token as a cookie
      Cookies.set("authToken", token, { expires: 7 });

      // Set token to header for all requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      return {
        success: true,
        message: "Logged in successfully",
        token,
      };
    } else {
      return {
        success: false,
        message: "Token missing in response",
      };
    }
  } catch (error) {
    console.error("Error in login:", error.response?.data || error.message);
    return {
      success: false,
      message: error.response?.data?.message || error.message,
    };
  }
};
  