import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import ClosablePopup from './ClosablePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfileClick] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlaceClick] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarClick] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditProfileClick() {
    setEditProfileClick(true);
  };

  function handleAddPlaceClick() {
    setAddPlaceClick(true);
  };

  function handleEditAvatarClick() {
    setEditAvatarClick(true);
  };

  function handleCardClick(card) {
    setSelectedCard(card);
  };

  function closeAllPopups() {
    setEditProfileClick(false);
    setAddPlaceClick(false);
    setEditAvatarClick(false);
    setSelectedCard({});
  };

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {isEditProfilePopupOpen ?
        <ClosablePopup>
          <PopupWithForm
            title="Редактировать профиль"
            name="title"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            children={(
              <fieldset className="modal__fields">
                <label className="modal__field">
                  <input type="text" className="modal__input" name="nickname" id="name-input" required minLength="2" maxLength="40" />
                  <span className="modal__placeholder" id="name-input-placeholder">Имя</span>
                  <span id="name-input-error" className="modal__input-error"></span>
                </label>
                <label className="modal__field">
                  <input type="text" className="modal__input" name="desc" id="desc-input" required minLength="2" maxLength="200" />
                  <span className="modal__placeholder" id="desc-input-placeholder">О себе</span>
                  <span id="desc-input-error" className="modal__input-error"></span>
                </label>
              </fieldset>
            )}
          />
        </ClosablePopup>
      : ''}
      {isAddPlacePopupOpen ?
        <ClosablePopup>
          <PopupWithForm
            title="Новое место"
            name="place"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            children={(
              <fieldset className="modal__fields">
                <label className="modal__field">
                  <input type="text" className="modal__input" name="name" id="place-input" required minLength="2" maxLength="30" />
                  <span className="modal__placeholder" id="place-input-placeholder">Название</span>
                  <span id="place-input-error" className="modal__input-error"></span>
                </label>
                <label className="modal__field">
                  <input type="url" className="modal__input" name="link" id="link-input" required />
                  <span className="modal__placeholder" id="link-input-placeholder">Ссылка на картинку</span>
                  <span id="link-input-error" className="modal__input-error"></span>
                </label>
              </fieldset>
            )}
          />
        </ClosablePopup>
      : ''}
      {isEditAvatarPopupOpen ?
        <ClosablePopup>
          <PopupWithForm
            title="Обновить аватар"
            name="avatar"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            children={(
              <label className="modal__field">
                <input type="url" className="modal__input" name="avatar" id="avatar-input" required />
                <span className="modal__placeholder" id="avatar-input-placeholder">Ссылка на аватар</span>
                <span id="avatar-input-error" className="modal__input-error"></span>
              </label>
              )}
            />
        </ClosablePopup>
      : ''}
      {selectedCard.link ?
      <ClosablePopup>
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        </ClosablePopup>
      : ''}
    </div>
  );
}

export default App;
