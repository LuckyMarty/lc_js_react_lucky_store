export const getLocalStorage = (param) => {
    const data = JSON.parse(localStorage.getItem(param));
    return data !== null ? data : null;
}

export const setLocalStorage = (param, values) => {
    window.localStorage.setItem(param, JSON.stringify(values));
}