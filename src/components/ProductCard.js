import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

export default function ProductCard(props) {
  const navigate = useNavigate();

  return (
    <div>
    <div className='product-card' onClick={() => navigate(`/Product/${props.id}`)} style={{cursor:'pointer'}} >
      <div className='product-content'>
        <div className='product-image'>
          <img src={props.thumbnail} alt={props.title} />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{props.title}</h5>
          <h6 className='mt-2' style={{ color: 'black', fontWeight: 'bold' }}>Price: ${props.price}</h6>
          <h6 className='mt-2' style={{ color: 'black', fontWeight: 'bold' }}>Discount: {props.discountPercentage}%</h6>
          <div className='mt-4'>
            {props.stock > 0 ? (
              <button className='btn btn-secondary'>Available</button>
            ) : (
              <button className='btn btn-outline-danger'>Out of stock</button>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
