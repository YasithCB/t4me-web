import Card from "react-bootstrap/Card";
import CommonBtn from "./CommonBtn";
import { useLocation } from "react-router-dom";

function ImageCard(props) {
  let location = useLocation();

  return (
    <div className="card-container">
      <Card className={`${location.pathname === "/blog" ? "w-50" : "w-100"}`}>
        <Card.Img className="card-img px-1" variant="top" src={props.imgPath} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="card-text">{props.desc}</Card.Text>
          <CommonBtn text={props.btnText} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default ImageCard;
