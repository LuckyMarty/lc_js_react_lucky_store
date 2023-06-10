import React from 'react'

const Product = ({ product, index }) => {
    return (
        <tr key={index}>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default Product