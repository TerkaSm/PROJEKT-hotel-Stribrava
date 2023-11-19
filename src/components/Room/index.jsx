import './style.css';
import { useState } from 'react';

export const Room = ({ room, onChoose }) => {
  return (
    <div
      onClick={() => {
        onChoose(room.name);
      }}
      className="card"
    >
      <img className="card__image" src={room.img} />
      <div className="card__title">{room.name}</div>
      <div className="card__body">{room.price} Kč na osobu</div>
    </div>
  );
};
