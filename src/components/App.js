import "../styles.css";
import Heading from "./Heading";

// const foods = ["bacon", "chicken", "kbbq"];
// const listItems = foods.map((string) => <li>{string}</li>);
const img = "https://picsum.photos/200";

export default function App() {
  return (
    <div className="Heading" contentEditable="false" spellCheck="false">
      <Heading />
      <div>
        <img
          className="food-img"
          alt="bacon"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190621-air-fryer-bacon-0035-landscape-pf-1567632709.jpg?crop=0.645xw:0.967xh;0.170xw,0.0204xh&resize=480:*"
        />
        <img className="food-img" alt="random" src={img} />
        <img
          className="food-img"
          alt="kbbq"
          src="https://media-cdn.tripadvisor.com/media/photo-s/13/16/18/fb/photo0jpg.jpg"
        />
      </div>
    </div>
  );
}
