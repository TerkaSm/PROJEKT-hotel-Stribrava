import './style.css';
import { useState } from 'react';

export const RoomDetail = ({ id, img, descriprion, price, name, onChoose }) => {
  return (
    <div key={id} className="column">
      <img src={img} />
      <p>{descriprion}</p>
    </div>
  );
};
