import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);
    
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Shopping Cart</h1>
            <div className="row">
                {/* <!-- First Part: List of Items --> */}
                <div className="col-md-8 my-4">
                    <div className="card card1">
                        <div className="card-header fw-bold" style={{ backgroundColor: "lightblue" }}>
                            Items in Cart
                        </div>
                        <div className="row" id="cart-items">
                            <div className="col-12 mb-3 my-3">
                                {/* <!-- Individual Item in Cart --> */}
                                {all_product.map((e) => {
                                    if (cartItems[e.id] > 0) {

                                        return <div className="card1 border-0" key={e.id}>
                                            <div className="row g-0 cartitems_format_main">
                                                <img src={e.image} alt='' className='product_img' />
                                                <p>{e.name}</p>
                                                <p>${e.new_price}</p>
                                                <button className='cartitems_quantity'>{cartItems[e.id]}</button>
                                                <p>${e.new_price * cartItems[e.id]}</p>
                                                <button className='btn btn-danger' onClick={() => { removeFromCart(e.id) }}><i className="fa-solid fa-trash"></i></button>
                                            </div>
                                            <hr />
                                        </div>
                                    }
                                    return null; // Always return something from map
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Second Part: Summary --> */}
                <div className="col-md-4 my-4">
                    <div className="card">
                        <div className="card-header fw-bold" style={{ backgroundColor: "lightblue" }}>
                            Summary
                        </div>
                        <div className="card-body mt-2">
                            <div className="mb-3">
                                {/* <!-- Total Product Price --> */}
                                Product Price (Total): <span id="total-price" style={{ float: "right" }}>${getTotalCartAmount()}</span>
                            </div>
                            <div className="mb-3">
                                {/* <!-- Shipping Cost --> */}
                                Shipping: <span id="ship-charge" style={{ float: "right" }}>$00.00</span>
                            </div>
                            <hr />
                            <div className="mb-3">
                                {/* <!-- Total Cart Price --> */}
                                Total: <span id="cart-total" style={{ float: "right" }}>${getTotalCartAmount()}</span>
                            </div>
                            {/* <!-- Checkout Button --> */}
                            <button className="btn btn-primary btn-block">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems