import React from 'react';

function ImagePopup(props) {
  React.useEffect(() => {
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

  return (
    <section className={`modal modal_type_lightbox ${props.card.link ? 'modal_opened' : ''}`}>
      <div className="modal__lightbox">
        <figure className="modal__figure">
          <img src={props.card.link} alt={props.card.link} className="modal__image" />
          <figcaption className="modal__caption">{props.card.name}</figcaption>
        </figure>
        <button className="modal__close-btn button" type="button" onClick={props.onClose}></button>
      </div>
    </section>
  );
}

export default ImagePopup;
