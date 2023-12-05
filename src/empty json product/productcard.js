import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Header.css';
export default function ProductCard(props) {
    const navigate = useNavigate();
  return (
    <div>
    <div className='card m-3 cursor-pointer ' style={{width:300}} role='button' onClick={() =>navigate(`/Product/${props.id}`)}>

        <div className='mt-2'>
            <img src={props.thumbnail} height={150} width={150} alt={props.title} className='product-border'/>
      
    </div>
    <div className='card-body'>
        <h5 className='card-title'>{props.title} </h5>
        <h6 className="mt-2">Price : {`$${props.price}`}</h6>
        <h6 className="mt-2">Discount : {props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating : {props.rating}</h6>  
        <div className='mt-4'>
            {props.stock > 0 ? <button className='btn btn-success'>Available</button>:<button className='btn btn-outline-danger'>out of stock</button>}
        </div>
    </div>
    </div>
    <div className='new_adv'>z
    </div>
    </div>
  
  );
}
