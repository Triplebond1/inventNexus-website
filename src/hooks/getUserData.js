import Cookies from "js-cookie";

export function getUserData() {
    const userData = Cookies.get("userData");
    return userData ? JSON.parse(userData) : null;
}
