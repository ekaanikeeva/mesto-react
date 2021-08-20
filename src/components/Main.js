import React from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserAvatar(res.avatar);
        setUserDescription(res.about);
      })
      .catch((err) => {
        console.log(`Не удалось загрузить данные пользователя ${err}`);
      });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(`Не удалось загрузить карточки на страницу ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <button
          type="button"
          className="profile__change-avatar-btn"
          onClick={props.onEditAvatar}
        />
        <img
          className="profile__avatar"
          src={userAvatar}
          alt="Аватар профиля"
        />
        <div className="profile__info">
          <h1 id="profile-name" className="profile__name">
            {userName}
          </h1>
          <p id="profile-status" className="profile__status">
            {userDescription}
          </p>
        </div>
        <button
          type="button"
          className="profile__edit-btn"
          onClick={props.onEditProfile}
        />
        <button
          type="button"
          className="profile__add-btn"
          onClick={props.onAddPlace}
        />
      </section>

      <section className="photo-list">
        <ul className="figures">
          {cards.map((item) => {
            return (
              <Card
                key={item._id}
                cardData={item}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default Main;
