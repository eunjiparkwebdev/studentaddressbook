import "./card.styles.css";

const Card = ({ student }) => {
  const { id, name, email, imageUrl } = student;
  return (
    <div className="card-container" key={id}>
      <img
        src={
          imageUrl === ""
            ? `http://robohash.org/${id}?set=set4&size=180x180`
            : `${imageUrl}`
        }
        alt={`student ${name}`}
      ></img>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
