import './style.css';
import { useState } from 'react';

export const RoomDetail = ({ id, img, popis, cena, pokoj, onChoose }) => {
  return (
    <div key={id} className="column">
      <h2>
        Pokoj {pokoj}, {cena} Kč na osobu za noc
      </h2>
      <img src={img} />
      <p>{popis}</p>
    </div>
  );
};
