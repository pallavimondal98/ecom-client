import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item'
import { Link } from 'react-router-dom'

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt='' />
            <div className='shopcategory-indexSort'>
                <p>
                    <span>Showing 1-12</span> out of 36 product
                </p>
                <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" >
                        Sort By
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <Link to="/womens"><li><p className="dropdown-item" >Women</p></li></Link>
                        <Link to='/mens'><li><p className="dropdown-item">Men</p></li></Link>
                        <Link to='/kids'><li><p className="dropdown-item">Kid</p></li></Link>
                    </ul>
                </div>
            </div>
            <div className='shopcategory-products'>
                {/* <div className='container'>
                    <div className='row'> */}
                        {all_product.map((item, i) => {
                            if (props.category === item.category) {
                                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                            } else {
                                return null;
                            }
                        })}
                    {/* </div>
                </div> */}
            </div>
            <div className="explore">
                <button type="button" className="btn btn-outline-secondary ">Explore More</button>
            </div>

        </div>
    )
}

export default ShopCategory