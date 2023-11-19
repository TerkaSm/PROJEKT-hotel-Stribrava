import './style.css';
import { useState } from 'react';

export const Room = ({ id, description, img, name, price, onChoose }) => {
  return (
    <div
      onClick={() => {
        onChoose(name);
      }}
      className="card"
    >
      <img className="card__image" src={img} />
      <div className="card__title">{name}</div>
      <div className="card__body">{price} Kč na osobu</div>
    </div>
  );
};
