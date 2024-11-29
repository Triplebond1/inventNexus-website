const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();



const createUser = async (username, email, password) => {

  const url = `${process.env.INVENT_NEXUS_API}/users`;
  try {
    const data = {
      username,
      email,
      password,
    };

    const response = await axios.post(url, data, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });

    console.log("POST request successful. Response:", response.data);
    return response.data;

  } catch (error) {
    console.error("Error in POST request:", error.response?.data || error.message);
    // Handle specific errors here, e.g., if error.response exists, log status code
    return { success: false, message: error.message };
  }
};


const loginUser = async (usernameOrEmail, password) => {
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usernameOrEmail, password }),
      });
  
      const data = await response.json();
      if (data.success) {
        console.log("Logged in successfully");
        return { message: data.message }
      } else {
        console.error("Login failed:", data.message);
      }
    } catch (error) {
      console.error("Error in login:", error);
    }
  };
  




module.exports = { createUser, loginUser };

// const loginUser = async (usernameOrEmail, password) => {
  
//   const url = `${process.env.INVENT_NEXUS_API}/users`;
//   try {
//     const data = {
//       usernameOrEmail,
//       password,
//     };

//     const response = await axios.post(url, data, {
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     });

//     console.log("POST request successful. Response:", response.data);
//     return response.data;

//   } catch (error) {
//     console.error("Error in POST request:", error.response?.data || error.message);
//     // Handle specific errors here, e.g., if error.response exists, log status code
//     return { success: false, message: error.message };
//   }
// };

// const axios = require('axios');

// // Make a request for a user with a given ID
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('/user?ID=12345');
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const axios = require('axios');

// const url = 'https://jsonplaceholder.typicode.com/posts';
// const data = {
//   title: 'Hello World',
//   body: 'This is a test post.',
//   userId: 1,
// };

// axios
//   .post(url, data, {
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json;charset=UTF-8',
//     },
//   })
//   .then(({ data }) => {
//     console.log("POST request successful. Response:", data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
