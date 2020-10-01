import React from 'react';
import FormValidator from './FormValidator';
import { validateOptions } from '../utils/utils';


function PopupWithForm(props) {
  React.useEffect(() => {
    // Пока не удалось сделать без дублирования в ImagePopup, работаю над этим)
    function closeModalWithEsc(e) {
      if (e.key === "Escape") {
        props.onClose();
      }
    };

    function closeModalWithClick(e) {
      if (e.target.classList.contains('modal')) {
        props.onClose();
      }
    };

    document.addEventListener('mousedown', closeModalWithClick);
    document.addEventListener('keydown', closeModalWithEsc);

    return () => {
      document.removeEventListener('mousedown', closeModalWithClick);
      document.removeEventListener('keydown', closeModalWithEsc);
    };
  }, [props]);

  React.useEffect(() => {
    const formValidator = new FormValidator(`.modal_type_${props.name}`, validateOptions);
    formValidator.enableValidation();
  }, [props.name]);

  function submitHandler(e) {
    e.preventDefault();
    props.onClose();
  };

  return (
    <section className={`modal modal_type_${props.name} ${props.isOpen ? 'modal_opened' : ''}`}>
      <div className="modal__container">
        <h3 className="modal__title">{props.title}</h3>
        <form className="modal__form" name={props.name} method="GET" action="#" noValidate onSubmit={submitHandler}>
          {props.children}
          <button className="modal__save-btn button modal__save-btn_disabled" type="submit" disabled>Сохранить</button>
        </form>
        <button className="modal__close-btn button" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default PopupWithForm;
