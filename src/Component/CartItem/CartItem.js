import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import './CartItem.css'

const CartItem = () => {
    const { Menu, cartItem,  removeFromCart} = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-header'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove Item</p>
            </div>
            <hr />
            {Menu.map((item) => {
                const quantity = cartItem[item.id] || 0; // default to 0 if not found
                if (quantity > 0) {
                    return (
                        <div key={item.id} className='cart-item cartitems-header'>
                            <img className='image-item' src={item.image} />
                            <p>{item.name}</p>
                            <p>{item.newprice}$</p>
                            <p>{quantity}</p>
                            <p>{item.newprice * quantity}$</p> {/* Assuming total price */}
                            <img onClick={()=>{ removeFromCart(item.id)}} className='image-item2' src='../Images/Remove-icon.png'></img>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default CartItem;
