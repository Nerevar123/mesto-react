import React from 'react';
import FormValidator from './FormValidator';
import { validateOptions } from '../utils/utils';


function PopupWithForm(props) {
  React.useEffect(() => {
    const formValidator = new FormValidator(`.modal_type_${props.name}`, validateOptions);
    formValidator.enableValidation();
    setTimeout(() => {
      formValidator.resetError();
    }, 0);

  }, [props.name]);

  return (
    <section className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__container">
        <h3 className="modal__title">{props.title}</h3>
        <form className="modal__form" name={props.name} method="GET" action="#" noValidate onSubmit={props.onSubmit}>
          {props.children}
          <button className="modal__save-btn button modal__save-btn_disabled" type="submit" disabled>{props.isSaving ? 'Загрузка...' : props.buttonText}</button>
        </form>
        <button className="modal__close-btn button" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
