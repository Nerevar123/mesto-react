import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  };

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="title"
      buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSaving={props.isSaving}
      children={(
        <fieldset className="modal__fields">
          <label className="modal__field">
            <input type="text" className="modal__input" name="nickname" id="name-input" required minLength="2" maxLength="40" value={name} onChange={handleNameChange} />
            <span className="modal__placeholder modal__placeholder_is-fixed" id="name-input-placeholder">Имя</span>
            <span id="name-input-error" className="modal__input-error"></span>
          </label>
          <label className="modal__field">
            <input type="text" className="modal__input" name="desc" id="desc-input" required minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange} />
            <span className="modal__placeholder modal__placeholder_is-fixed" id="desc-input-placeholder">О себе</span>
            <span id="desc-input-error" className="modal__input-error"></span>
          </label>
        </fieldset>
      )}
    />
  );
}

export default EditProfilePopup;
