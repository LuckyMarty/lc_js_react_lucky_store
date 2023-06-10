import { useEffect, useState } from 'react'
import { getAllProduct } from '../api/product';

export default function useProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        document.title = "Products - Lucky Store";
        getAllProduct().then(data => {
            setProducts(data)
        })
    }, [])

    return products;
}
