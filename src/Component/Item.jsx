import React from 'react'

const Item = (props) => {

        return(
            <div className="item">
                <p>{props.name}</p>
                <div className="item-prices">
                    <div className="item-price-new">
                        {props.price}
                    </div>
                </div>
            </div>
        )       
        
}

export default Item;