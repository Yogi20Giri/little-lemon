import Hero from "../static/restaurantfood.png";
import { Link } from "react-router-dom";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <main>
      <div className="container">
        <section className="content">
          <h1 className="title">Little Lemon</h1>
          <h3>Chicago</h3>
          <p className="text">
            The fabric of Little Lemon was born out of love and respect for
            these humble deli creations, met with a desire to bring quality
            ingredients to the table. Simply put, we're here to bring you a
            sandwich experience you can feel good about.
          </p>
          <Link to="/booking">
            <button className="button btn-cta" type="button">
              Reserve a table
            </button>
          </Link>
        </section>
        <aside className="image-container">
          <img src={Hero} alt="Hero" />
        </aside>
      </div>
    </main>
  );
};

export default CallToAction;
