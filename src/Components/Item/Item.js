import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Item = (props) => {
    const {addToCart} = useContext(ShopContext);
    return (

            <div className=" card" style={{ margin: "0.5rem" }}>
                <Link to={`/product/${props.id}`}><img src={props.image} className="card-img-top" alt="..." /></Link>
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase">Shree Collection</h5>
                    <p className="card-text">{props.name}</p>
                    <div className='price'>
                        <div className='new_price'>
                            <p>${props.new_price}</p>
                        </div>
                        <div className='old_price'>
                            <p>${props.old_price}</p>
                        </div>
                    </div>

                    <Button onClick={()=>{addToCart(props.id)}} className="btn-warning ">Add To Cart</Button>
                </div>
            </div>

    )
}

export default Item