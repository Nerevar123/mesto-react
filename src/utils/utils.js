export const validateOptions = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__save-btn',
  inactiveButtonClass: 'modal__save-btn_disabled',
  inputErrorClass: 'modal__input_type_error',
  errorClass: 'modal__input-error_active',
  placeModal: 'modal_type_place',
  avatarModal: 'modal_type_avatar'
};

export const apiOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
  headers: {
    authorization: '793e9e42-5ad3-4803-88e8-acbb4feac8c0',
    'Content-Type': 'application/json'
  }
};