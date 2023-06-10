export async function getAllProduct() {
    const response = await fetch('http://localhost:3000/api/product')
    const data = await response.json()

    return Promise.resolve(data)

}