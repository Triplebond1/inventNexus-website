import axios from "axios";

export default async function handler(req, res) {
  const { usernameOrEmail, password } = req.body;
  const url = `${process.env.INVENT_NEXUS_API}/users/login`;

  try {
    const response = await axios.post(url, { usernameOrEmail, password });
    const token = response.data?.token;

    if (token) {
      res.setHeader("Set-Cookie", `token=${token}; HttpOnly; Secure; Path=/; SameSite=Strict`);
      return res.status(200).json({ success: true, message: "Logged in successfully" });
    } else {
      return res.status(400).json({ success: false, message: "Token missing in response" });
    }
  } catch (error) {
    return res.status(400).json({ success: false, message: error.response?.data || error.message });
  }
}


// const loginUser = async (usernameOrEmail, password) => {
//     try {
//       const response = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ usernameOrEmail, password }),
//       });
  
//       const data = await response.json();
//       if (data.success) {
//         console.log("Logged in successfully");
//       } else {
//         console.error("Login failed:", data.message);
//       }
//     } catch (error) {
//       console.error("Error in login:", error);
//     }
//   };
  