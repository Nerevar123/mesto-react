import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  };

  function handleLinkChange(e) {
    setLink(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    props.onAddPlace({ name, link });
  };

  return (
    <PopupWithForm
      title="Новое место"
      name="place"
      buttonText="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSaving={props.isSaving}
      children={(
        <fieldset className="modal__fields">
          <label className="modal__field">
            <input type="text" className="modal__input" name="name" id="place-input" required minLength="2" maxLength="30" onChange={handleNameChange} />
            <span className="modal__placeholder" id="place-input-placeholder">Название</span>
            <span id="place-input-error" className="modal__input-error"></span>
          </label>
          <label className="modal__field">
            <input type="url" className="modal__input" name="link" id="link-input" required onChange={handleLinkChange}/>
            <span className="modal__placeholder" id="link-input-placeholder">Ссылка на картинку</span>
            <span id="link-input-error" className="modal__input-error"></span>
          </label>
        </fieldset>
      )}
    />
  );
}

export default AddPlacePopup;
