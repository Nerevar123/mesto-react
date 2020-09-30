import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  };

  return (
    <li className="place">
      <div className="place__img-wrapper" onClick={handleClick}>
        <img src={props.card.link} alt={props.card.name} className="place__image" />
      </div>
      <div className="place__header">
        <h3 className="place__title">{props.card.name}</h3>
        <div className="place__like">
          <button className="place__like-btn button" type="button"></button>
          <span className="place__like-count">{props.card.likes.length}</span>
        </div>
      </div>
      <button className="place__delete-btn button" type="button"></button>
    </li>
  );
}

export default Card;
