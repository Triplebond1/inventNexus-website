const logOutUserHandler = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Strict",
    secure: process.env.NODE_ENV === "production",
    path: "/", // Ensure it clears from all routes
  });

  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { logOutUserHandler };
