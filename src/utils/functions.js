import { getLocalStorage, setLocalStorage } from "./localStorage";

export const formatPrice = (price) => {
    return price.toFixed(2);
}



export const updateCartQuantity = (site, data, quantity) => {
    data.cartquantity = quantity;

    if (site.cart !== null) {
        let alreadyInCart = false;
        let inCart = [];

        site.cart.forEach(product => {
            if (product.id === data.id) {
                alreadyInCart = true;
                inCart.push(data);
            } else {
                inCart.push(product);
            }
        });

        if (!alreadyInCart) {
            site.setCart([...site.cart, data]);
            setLocalStorage('inCart', [...site.cart, data]);
        } else {
            site.setCart(inCart);
            setLocalStorage('inCart', inCart);
        }
    } else {
        site.setCart([data]);
        setLocalStorage('inCart', [data]);
    }
}


export const addToCart = (site, item, quantity) => {
    if (site.cart !== null) {
        let alreadyInCart = false;
        let inCart = [];

        site.cart.forEach(product => {
            if (product.id === item.id) {
                alreadyInCart = true;


                if ((+product.cartquantity) + quantity >= product.quantity) {
                    alert("Max Product Quantity Reached");
                    item.cartquantity = product.quantity;
                    inCart.push(item);
                } else {
                    item.cartquantity = (+product.cartquantity) + quantity;
                    inCart.push(item);
                }

            } else {
                inCart.push(product);
            }
        });

        if (!alreadyInCart) {
            item.cartquantity = quantity;
            site.setCart([...site.cart, item]);
            setLocalStorage('inCart', [...site.cart, item]);
        } else {
            site.setCart(inCart);
            setLocalStorage('inCart', inCart);
        }
    } else {
        item.cartquantity = quantity;
        site.setCart([item]);
        setLocalStorage('inCart', [item]);
    }



    site.setReload(item.cartquantity);
}