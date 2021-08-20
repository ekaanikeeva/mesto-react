import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.cardData);
  }

  return (
    <li className="figure">
      <img
        className="figure__pic figure__pic-btn"
        src={props.cardData.link}
        alt={props.cardData.name}
        onClick={handleClick}
      />
      <button type="button" className="figure__basket"></button>
      <h2 className="figure__name">{props.cardData.name}</h2>
      <button type="button" className="figure__like">
        <p className="figure__like-counter">{props.cardData.likes.length}</p>
      </button>
    </li>
  );
}

export default Card;
