import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  return (
  <PopupWithForm
    title="Обновить аватар"
    name="avatar"
    buttonText="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isSaving={props.isSaving}
    children={(
      <label className="modal__field">
        <input type="url" className="modal__input" name="avatar" id="avatar-input" required ref={avatarRef} />
        <span className="modal__placeholder" id="avatar-input-placeholder">Ссылка на аватар</span>
        <span id="avatar-input-error" className="modal__input-error"></span>
      </label>
    )}
  />
  );
}

export default EditAvatarPopup;
