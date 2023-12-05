import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductList } from '../data/ProductList';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/reducer/cart';
import '../components/Header.css'
export default function Product() {

    const params = useParams();
    const dispatch = useDispatch();
    const props = ProductList.find(
        (element) => element.id === parseInt(params.id)
        
        );
        const addToCart = () => {
            if (props) {
              dispatch(addItem(props));
            }
          };
    return (
        <div className='left_panel'>

            <div className='mt-2'>
                <img src={props.thumbnail} height={250} width={250} alt={props.title} className='product-border' />

            </div>
            <div className='mt-3 card-body'>
                <h5 className='card-title'>{props.title} </h5>
                <h6 className="mt-2">Price : {`$${props.price}`}</h6>
                <h6 className="mt-2">Discount : {props.discountPercentage}%</h6>
                <h6 className="mt-2">Rating : {props.rating}</h6>
                <div className='mt-4'>
                    {props.stock > 0 ? (<>
                    <button className='btn btn-success'>Buy Now</button>
                    <button className='ms-3 btn btn-success' onClick={addToCart}>Add to Cart</button>
                     </>) : (<button className='btn btn-outline-danger'>out of stock</button>)}
                </div>
            </div>
        </div>
    )
}
