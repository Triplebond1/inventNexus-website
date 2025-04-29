"use client"
import { useState } from "react";

export  const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className = "flex flex-col bg-white ">
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)} className="bg-blaze-orange-500 mb-5">Increment</button>
      <button onClick={() => setCount(count - 1)} className="bg-blaze-orange-500 mb-5">Decrement</button>
      <button onClick={() => setCount(0)} className="bg-blaze-orange-500 mb-5">Reset</button>
    </div>
  );
}


export const NameInput = () => {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value.trim()); // Trim input to ensure clean string
  };

  return (
    <div>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Hello, {name || "Guest"}!</p>
    </div>
  );
}


export  const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(), // Trim all string inputs
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}



export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div style={{ background: isDarkMode ? "#333" : "#fff", color: isDarkMode ? "#fff" : "#000" }}>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      <p>Current mode: {isDarkMode ? "Dark" : "Light"}</p>
    </div>
  );
}




export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [...prev, input.trim()]);
      setInput(""); // Clear input
    }
  };

  const removeTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export const LoginForm =() => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Welcome, {username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}





export const AdvancedSignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const validationErrors = validate();
    setFormData((prev) => ({
      ...prev,
      [name]: value.trim(),
    }));

    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    }
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }
    try {
      // Simulate API call
      console.log("Submitting:", formData);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setFormData({ username: "", email: "", password: "" });
      setErrors({});
    } catch (error) {
      setErrors({ form: "Submission failed. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            disabled={isSubmitting}
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
            disabled={isSubmitting}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            disabled={isSubmitting}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      {errors.form && <p style={{ color: "red" }}>{errors.form}</p>}
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Sign Up"}
      </button>
    </form>
  );
}