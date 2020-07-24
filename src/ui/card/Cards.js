import React from "react";
import CardItem from "./CardItem/CardItem";
import "./Cards.css";
import { Books } from "../../components/logo/BookLogo";
const Cards = (props) => {
  return (
    <div className="cards">
      {props.items.map((item, i) => (
        <CardItem
          key={i}
          label={item}
          value={item}
          icon={<Books />}
          clicked={() => props.clicked(item.key)}
        />
      ))}
    </div>
  );
};

export default Cards;
