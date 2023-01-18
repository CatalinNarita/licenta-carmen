import "./room-card.css";

export function RoomCard(props) {
  return (
    <div className="card-container">
      <img
        className="room-image"
        src="https://th.bing.com/th/id/OIP.QxadRQgf34lGKQLXWXFIHgHaE7?pid=ImgDet&rs=1"
      ></img>
      <div className="card-details">
        <div>
          <h2>{props.title}</h2>
          <div>Max Count:{props.capacity}</div>
          <div>Phone Number:{props.phone}</div>
          <div>Type: {props.type}</div>
        </div>
      </div>
      <button className="book-button">Book now</button>
    </div>
  );
}
