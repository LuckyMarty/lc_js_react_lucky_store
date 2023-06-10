import React from 'react'
import Product from './Product'

const ByCategory = (
    {
        category,
        products,
        stocked = false
    }
) => {

    return (
        <>
            <tr>
                <th colSpan={2}>{category}</th>
            </tr>

            {
                products.map((product, index) => {

                    if (stocked) {
                        if (product.stocked === stocked) {
                            return (
                                <Product
                                    product={product}
                                    key={index}
                                />
                            )
                        }
                    } else {
                        return (
                           <Product
                            product={product}
                            key={index}
                           />
                        )
                    }
                })
            }
        </>
    )
}

export default ByCategory