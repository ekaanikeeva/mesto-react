import React from "react";

function Card (props) {

    function handleClick() {
        props.onCardClick(props);
      } 

    return(
        <li key={props._id} className="figure">
                    <img className="figure__pic figure__pic-btn" src={props.link} onClick={handleClick}/>
                    <button type="button" className="figure__basket"></button>
                    <h2 className="figure__name">{props.name}</h2>
                    <button type="button" className="figure__like">
                        <p className="figure__like-counter">{props.likesCount}</p>
                    </button>
                </li>
    )
}

export default Card;