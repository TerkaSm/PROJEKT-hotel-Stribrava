import './style.css';

export const RoomDetail = ({ room }) => {
  const { id, img, name, price, description } = room;

  if (!room) {
    return <div>Error: Room data nejsou definována</div>;
  }

  return (
    <div key={id} className="column">
      <img src={img} />
      <p>{descriprion}</p>
    </div>
  );
};
