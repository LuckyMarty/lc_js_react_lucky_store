import { createContext } from "react";

export default createContext({
    logged: false,
    setLogged: () => {},
    isAdmin: false,
    setIsAdmin: () => {}
});