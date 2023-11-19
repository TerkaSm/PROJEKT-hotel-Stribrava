import './style.css';
import { useState } from 'react';

export const Room = ({ id, popis, img, room, cena, onChoose }) => {
  return (
    <div
      onClick={() => {
        onChoose(Room);
      }}
      className="card"
    >
      <img className="card__image" src={img} />
      <div className="card__title">{room}</div>
      <div className="card__body">{cena} Kč na osobu</div>
    </div>
  );
};
