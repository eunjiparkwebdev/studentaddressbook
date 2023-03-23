import "./card.styles.css";

const Card = ({ student }) => {
  const { id, name, email, imageUrl, title } = student;

  return (
    <div className="card-container col" key={id}>
      <img
        src={
          imageUrl === ""
            ? `http://robohash.org/bgset_bg1/${id}?set=set5&size=250x250`
            : `${imageUrl}`
        }
        alt={`student ${name}`}
      ></img>
      <h2>{name}</h2>
      {title && <h3>({title})</h3>}
      <p>{email}</p>
    </div>
  );
};

export default Card;
