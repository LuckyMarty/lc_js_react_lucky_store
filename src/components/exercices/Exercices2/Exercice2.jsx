import React, { useState } from 'react';
import ByCategory from './ByCategory';
const produits = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];



const Exercice2 = () => {

    const allCategories = (array) => {
        let category = [];

        array.map(element => {
            let multiple = false;
            let categoryName = '';

            category.map(name => {
                if (name == element.category) {
                    multiple = true;
                } else {
                    categoryName = element.category;
                }
            })

            if (!multiple) {
                category.push(categoryName)
            }
        });

        return category.splice(1);
    }

    const productsByCategory = (array) => {
        let productsByCategory = [];

        allCategories(array).map(categoryName => {
            let found = [];
            array.map(product => {
                if (product.category === categoryName) {
                    found.push(product);
                }
            })

            if (found.length > 0) {
                productsByCategory.push({
                    "name": categoryName,
                    "products": found
                });
            }
        })

        return productsByCategory;
    }




    // States
    const [products, setProducts] = useState(productsByCategory(produits))
    const [stocked, setStocked] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')



    const search = (term) => {
        let result = [];
        products.map(category => {
            let found = category.products.filter(product => product.name.toLowerCase().includes(term.toLowerCase()));
            
            if (found.length > 0) {
                result.push({
                    "name": category.name,
                    "products": found
                });
            }
        })

        return result;
    }


    const handleStocked = () => {
        stocked ? setStocked(false) : setStocked(true);
    }

    const handleSearch = (e) => {
        let value = e.target.value;

        if (value.length !== 0) {
            setProducts(search(value));
        } else {
            setProducts(productsByCategory(produits));
        }

        setSearchTerm(value);
    }


    return (
        <>
            <input
                type="text"
                placeholder='Rechercher'
                onChange={(e) => handleSearch(e)}
                value={searchTerm}
            />

            <br />

            <input type="checkbox" name="inStock" id="inStock" onChange={() => handleStocked()} />
            <label htmlFor="inStock">Uniquement les articles en stock</label>

            <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        products.map((category, index) => (
                            <ByCategory
                                category={category.name}
                                products={category.products}
                                stocked={stocked}
                                key={index}
                            />
                        ))
                    }

                </tbody>
            </table>
        </>
    )
}

export default Exercice2