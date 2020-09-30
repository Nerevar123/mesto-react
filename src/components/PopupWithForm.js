import React from 'react';

function PopupWithForm(props) {
  return (
    <section className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__container">
        <h3 className="modal__title">{props.title}</h3>
        <form className="modal__form" name={props.name} method="GET" action="#" noValidate>
          {props.children}
          <button className="modal__save-btn button" type="submit">Да</button>
        </form>
        <button className="modal__close-btn button" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  )
}

export default PopupWithForm;
