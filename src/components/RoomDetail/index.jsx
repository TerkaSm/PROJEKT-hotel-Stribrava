import './style.css';
import { useState } from 'react';

export const RoomDetail = ({ room }) => {
  const { id, img, name, price, description } = room;

  return (
    <div key={room.id} className="column">
      <img src={room.img} />
      <p>{room.descriprion}</p>
    </div>
  );
};
