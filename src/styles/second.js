"use client"
import { useState, useEffect } from "react";

export const TitleUpdater = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`; // Update title with string
  }, [count]); // Runs when count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}



export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.example.com/users");
        const data = await response.json();
        setUsers(data);
        setError(""); // Clear error
      } catch (err) {
        setError("Failed to fetch users: " + err.message); // String error message
      }
    };
    fetchUsers();
  }, []); // Empty array: runs once on mount

  return (
    <div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}



export const Timer = () => {
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (seconds <= 0) return; // Stop at 0

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup on unmount or before next effect
    };
  }, [seconds]); // Runs when seconds changes

  return (
    <div>
      <p>Time left: {seconds} seconds</p>
      <button onClick={() => setSeconds(10)}>Reset</button>
    </div>
  );
}




export const SignUpWithValidation = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const validateUsername = async () => {
      if (!formData.username.trim()) {
        setErrors((prev) => ({ ...prev, username: "Username is required" }));
        return;
      }
      try {
        // Simulate API call to check username availability
        await new Promise((resolve) => setTimeout(resolve, 500));
        if (formData.username.trim().toLowerCase() === "admin") {
          setErrors((prev) => ({ ...prev, username: "Username taken" }));
        } else {
          setErrors((prev) => ({ ...prev, username: "" }));
        }
      } catch (err) {
        setErrors((prev) => ({
          ...prev,
          username: "Error checking username",
        }));
      }
    };
    const timer = setTimeout(() => validateUsername(), 300); // Debounce
    return () => clearTimeout(timer); // Cleanup
  }, [formData.username]); // Runs when username changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim string inputs
    }));
  };

  return (
    <form>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}



export const WindowSize = ()  => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []); // Empty array: runs once on mount

  return <p>Window width: {windowWidth}px</p>;
}

export const PersistentForm = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem("formData");
    return saved
      ? JSON.parse(saved)
      : { username: "", email: "" };
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]); // Runs when formData changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim string inputs
    }));
  };

  return (
    <form>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
}


export const MessageFeed = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("wss://example.com/messages");

    socket.onmessage = (event) => {
      const message = event.data; // Assume string message
      setMessages((prev) => [...prev, message]);
    };

    socket.onerror = () => {
      setMessages((prev) => [...prev, "Connection error"]);
    };

    return () => {
      socket.close(); // Cleanup on unmount
    };
  }, []); // Runs once on mount

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
}



export const UserSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setError("");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://api.example.com/users?search=${encodeURIComponent(query.trim())}`
        );
        const data = await response.json();
        setResults(data);
        setError("");
      } catch (err) {
        setError("Failed to search: " + err.message);
      }
    };

    const timer = setTimeout(fetchUsers, 500); // Debounce
    return () => clearTimeout(timer);
  }, [query]); // Runs when query changes

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {results.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}