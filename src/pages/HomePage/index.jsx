import "./style.css";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { RoomList } from "../../components/RoomList";
import { Form } from "../../components/Form";
import { RoomDetail } from "../../components/RoomDetail";
import { useState, useEffect } from "react";

export const HomePage = ({ room, onChoose }) => {
  const [rooms, setRooms] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      const response = await fetch("http://localhost:4000/api/rooms");
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
          <h2>Pokoj {name}, {price} Kč na osobu za noc</h2>
            <div className="columns-2">
              <RoomDetail
                room={room}
                onChoose={selectedRoom}
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
