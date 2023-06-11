export async function getAllProduct() {
    const response = await fetch('http://localhost:3000/api/product')
    const data = await response.json()

    return Promise.resolve(data)

}


export async function edit(token, id, newData) {
    const response = await fetch(
        `http://localhost:3000/api/product/${id}`,
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


export async function remove(token, id) {
    const response = await fetch(
        `http://localhost:3000/api/product/${id}`,
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
        `http://localhost:3000/api/product/`,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify( newData )
        })
    const data = await response.json()
    return Promise.resolve(data);
}