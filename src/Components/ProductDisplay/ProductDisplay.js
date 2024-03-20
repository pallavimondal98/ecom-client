import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='pd-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className='pd-img'>
                <img className='pd-main-img' src={product.image} alt=''/>
            </div>

        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='pd-ri8-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='pd-ri8-prices'>
                <div className='pd-ri8-old-price'>${product.old_price}</div>
                <div className='pd-ri8-new-price'>${product.new_price}</div>
            </div>
            <div className='pd-ri8-description'>
                A lightweight, usually knitted, pullover shirt, close-fitting and wi a round neckline and short sleeves, worn as an undershirt or outer garment
            </div>
            <div className='pd-ri8-size'>
                <h1>Select Size</h1>
                <div className='pd-ri8-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='btn pd-btn btn-warning'>ADD TO CART</button>
                <p className='pd-ri8-category'><span>category: </span>women, T-Shirt, Crop Top</p>
                <p className='pd-ri8-category'><span>Tags: </span>Modern, Latest</p>
            </div>
        </div>

    </div>
  )
}

export default ProductDisplay