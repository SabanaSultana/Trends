import React from 'react';
import products from '../Data/data.js';
import './Cards.css'

function Cards() {
  return (
    <div className="cards-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.title} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{product.title}</h2>
            <p className="card-description">{product.description}</p>
            <p className='category'>{product.category}</p>
            <p className="card-price">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
