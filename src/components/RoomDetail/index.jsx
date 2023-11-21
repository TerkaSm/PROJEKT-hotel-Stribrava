import './style.css';

export const RoomDetail = ({ id, img, description}) => {

  if (!room) {
    return <div>Error: Room data nejsou definována</div>;
  }

  return (
    <div key={id} className="column">
      <img src={img} />
      <p>{description}</p>
    </div>
  );
};
