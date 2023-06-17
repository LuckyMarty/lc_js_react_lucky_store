export async function getAllOrders(token) {
    const response = await fetch(
        'http://localhost:3000/api/order',
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )
    const data = await response.json()
    return Promise.resolve(data)
}

export async function getOrderById(token, id) {
    const response = await fetch(
        `http://localhost:3000/api/order/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )
    const data = await response.json()
    return Promise.resolve(data)
}

export async function getOrderByUserId(token, id) {
    const response = await fetch(
        `http://localhost:3000/api/order/user/${id}`,
        {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        }
    )
    const data = await response.json()
    return Promise.resolve(data)
}




export async function edit(token, id, newData) {
    const response = await fetch(
        `http://localhost:3000/api/order/${id}`,
        {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newData)
        })
    const data = await response.json()
    return Promise.resolve(data);
}


export async function remove(token, id) {
    const response = await fetch(
        `http://localhost:3000/api/order/${id}`,
        {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        })
    const data = await response.json()
    return Promise.resolve(data);
}


export async function add(token, newData) {
    const response = await fetch(
        `http://localhost:3000/api/order/`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(newData)
        })
    const data = await response.json()
    return Promise.resolve(data);
}