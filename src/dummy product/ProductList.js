import React from "react";

function ProductList({product, addToCart}) {
    return(
        <div className="flex">
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{width: '25%'}}>
                            <div>
                                <img src={productItem.url} width="50%"></img>
                                <p>{productItem.name} </p>
                                <p> {productItem.category}</p>
                                <p>{productItem.price}</p>
                                <button onClick={() => addToCart(productItem)}>Add To Cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList