import { createContext } from "react";

export default createContext({
    reload: false,
    setReload: () => { },
    cart: [],
    setCart: () => { }
});