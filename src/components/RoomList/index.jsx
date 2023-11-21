import './style.css';
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
              key={id} room={room} onChoose={onChoose}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
