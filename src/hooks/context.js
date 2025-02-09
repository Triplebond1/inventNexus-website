import { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = Cookies.get("userData");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
}
// Compare this snippet from frontend/src/app/api/userApi.js:
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";

// export default function Dashboard() {
//     const { user } = useContext(AuthContext);

//     return <h1>Welcome, {user?.name || "Guest"}!</h1>;
// }
