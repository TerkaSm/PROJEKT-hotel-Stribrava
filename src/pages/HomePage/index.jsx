import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { RoomList } from '../../components/RoomList';
import { Form } from '../../components/Form';
import { RoomDetail } from '../../components/RoomDetail';
import { useState, useEffect } from 'react';

export const HomePage = ({ pokoj, cena, onChoose }) => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch('http://localhost:4000/api/pokoje');
      const data = await response.json();
      setRooms(data.result);
      setSelectedRoom(data.result[4]);
    };
    fetchRooms();
  }, []);
  if (rooms === null) {
    return <div>Načítám...</div>;
  }
  return (
    <div className="container">
      <Header />
      <main>
        <RoomList onChoose={setSelectedRoom} rooms={rooms} />
        <section className="light">
          <div className="container">
            <div className="columns-2">
              <RoomDetail
                id={selectedRoom.id}
                img={selectedRoom.img}
                cena={selectedRoom.cena}
                pokoj={selectedRoom.pokoj}
                popis={selectedRoom.popis}
              />
              <Form />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
