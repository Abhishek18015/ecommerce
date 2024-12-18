import React,{useState} from 'react'
import Cart from './Cart'
import DataCard from './DataCard';
import ShopCategory from './ShopCategory';

const CartItem = () => {
    const [ price ,setPrice] = useState(0);
    const [cart, setCart] = useState([]);

    const handleClickAdd = (item) => {
        setCart([...cart, item])
        console.log(cart)
    };
    const handleChange = (item, d) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, amount: cartItem.amount + d };
            }
            return cartItem;
        });
        setCart(updatedCart);
        handlePrice(updatedCart);
    };

    const handleRemove = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        handlePrice(updatedCart);
    };

    const handlePrice = (cartItems) => {
        let totalPrice = price;
        cartItems.forEach(item => {
            totalPrice += item.amount * item.newprice;
        });
        setPrice(totalPrice);
    };
  return (
    <div>
          <Cart cart={cart} handleChange={handleChange} handleRemove={handleRemove} handlePrice={handlePrice} />
         
    </div>
  )
}

export default CartItem
