import React from "react";
import "../index.js";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="root">
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        nameSubmitBtn="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="name"
          className="form__info form__info_name"
          id="input-name"
          placeholder="Как Вас зовут?"
          required
          minLength={2}
          maxLength={40}
        />
        <span className="input-name-error form__input-error" />
        <input
          type="text"
          name="status"
          className="form__info form__info_status"
          placeholder="Расскажите о себе"
          id="input-status"
          required
          minLength={2}
          maxLength={200}
        />
        <span className="input-status-error form__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="add-card"
        title="Новое место"
        nameSubmitBtn="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          name="title"
          className="form__info form__info_title"
          id="input-title"
          placeholder="Название"
          required
          minLength={2}
          maxLength={30}
        />
        <span className="input-title-error form__input-error" />
        <input
          type="url"
          name="link"
          className="form__info form__info_link"
          placeholder="Ссылка на картинку"
          id="input-link"
          required
        />
        <span className="input-link-error form__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        nameSubmitBtn="Сохранить"
        isOpen={isAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          name="link"
          className="form__info form__info_link form__info_avatar"
          placeholder="Ссылка на картинку"
          id="input-linkAvatar"
          required
        />
        <span className="input-linkAvatar-error form__input-error" />
      </PopupWithForm>

      <PopupWithForm
        name="delete-card"
        title="Вы уверены?"
        nameSubmitBtn="Да"
      ></PopupWithForm>

      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      {selectedCard && (
        <ImagePopup
          isOpen={selectedCard}
          onClose={closeAllPopups}
          link={selectedCard.link}
          name={selectedCard.name}
        ></ImagePopup>
      ) }
    </div>
  );
}

export default App;
