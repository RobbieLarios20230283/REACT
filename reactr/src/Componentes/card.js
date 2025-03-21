import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ nombre, edad, trabajo, imagen }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={imagen} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">Edad: {edad}</p>
        <p className="card-text">trabajo: {trabajo}</p>
      </div>
    </div>
  );
};



export default Card;