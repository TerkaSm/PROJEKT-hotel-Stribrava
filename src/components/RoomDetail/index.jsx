import './style.css';

export const RoomDetail = ({ id, img, description}) => {

  return (
    <div key={id} className="column">
      <img src={img} />
      <p>{description}</p>
    </div>
  );
};
