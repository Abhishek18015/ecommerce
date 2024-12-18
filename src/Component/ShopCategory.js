import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const ShopCategory = (props) => {
    const { addToCart } = useContext(ShopContext);
    const shopContext = useContext(ShopContext);

    if (!shopContext) {
        return <div>Loading...</div>;
    }

    const { Menu } = shopContext;

    return (
        <div className="collection-items">
            {Menu.map((item) => {
                if (props.category === item.category) {
                    return (
                        <div className="main-container" key={item.id}>
                            <div className="cardbody">
                                <img className="card-image" src={item.image} alt="" />
                                <div className="card-name">{item.name}</div>
                                <div className="card-price-old"><span className='cardpriceold'>{item.oldprice}$</span></div>
                                <div className="card-price-new">Price: {item.newprice}$
                                <button className="cart-button" onClick={() => addToCart(item.id)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    );
                } else {
                    return null;
                }
            })}
        </div>
    );
}

export default ShopCategory;
