import "./styles.css";
import Carousel from "./Carousel";

export default function App() {
  const numbers = [1, 2, 3];
  return (
    <div className="App">
      <Carousel delay={1000} children={numbers} />
    </div>
  );
}
