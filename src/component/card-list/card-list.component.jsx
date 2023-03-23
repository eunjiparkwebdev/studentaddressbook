import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ students }) => (
  <div className="card-list">
    {students.map((student) => {
      return <Card key={student.id} student={student} />;
    })}
  </div>
);

export default CardList;
