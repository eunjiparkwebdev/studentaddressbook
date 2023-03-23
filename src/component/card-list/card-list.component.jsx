import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ students }) => (
  <div class="container">
    <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-1 row-cols-md-2 gy-5">
      {students.map((student) => {
        return <Card key={student.id} student={student} />;
      })}
    </div>
  </div>
);

export default CardList;
