import './style.css';
import { useState, useEffect } from 'react';
import { Room } from '../Room';

export const RoomList = ({ rooms, onChoose }) => {

  return (
    <section className="dark">
      <div className="container">
        <h2>Naše pokoje</h2>
        <p>Vyberte si, který z našich pokojů je pro Vás ten pravý.</p>
        <div className="cards-row">
          {rooms.map((room) => (
            <Room
              key={room.id} img={room.img} room={room.name} price={room.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
