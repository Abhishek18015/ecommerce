import React, { useState} from 'react'
import Menu from './DataApi';
import { useContext } from 'react';
import { ShopContext } from './ShopContext';

const DataCard = (props) => {
    const { addToCart } = useContext(ShopContext);
    const shopContext = useContext(ShopContext);

    if (!shopContext) {
        return <div>Loading...</div>;
    }

    const { Menu } = shopContext;
        return (

            <>
    
           
                <div className="collection-items" >
                    {Menu.map((item, h) => {
                        return (<><div className="main-container" key={h}>
                            <div className="cardbody">
                                <img className="card-image" src={item.image} alt='' />
                                <div className="card-name">{item.name}</div>
                                <div className="card-price-old"><span className='cardpriceold'>{item.oldprice}$</span></div>
                                <div className="card-price-new"> Price : {item.newprice}$</div>
                                {/* <button className="cart-button" onClick={() => addToCart(Menu.id)} > Add To Cart</button> */}
                            </div></div></>


                        )
                    })}
                </div>

            </>

        );
    };


    export default DataCard;
