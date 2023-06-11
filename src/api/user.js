export async function login(email, password) {
    const response = await fetch(
        'http://localhost:3000/api/user/login',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
    const data = await response.json()

    return Promise.resolve(data);
}


export async function data(token) {
    const response = await fetch(
        'http://localhost:3000/api/user/data',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
    const data = await response.json()

    return Promise.resolve(data);
}


export async function edit(token, type, newData) {
    const response = await fetch(
        `http://localhost:3000/api/user/data/${type}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify( newData )
        })
    const data = await response.json()
    return Promise.resolve(data);
}


export async function signup(firstname, lastname, email, password) {
    const response = await fetch(
        'http://localhost:3000/api/user/signup',
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstname, 
                lastname, 
                email,
                password
            })
        })
    const data = await response.json()

    return Promise.resolve(data);
}