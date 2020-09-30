import React from 'react';
import Card from './Card';
import { api } from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setInitialCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getInitCards(),api.getUserInfo()])
    .then(([ cards, data ]) => {
      const userId = data._id;

      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar);
      setInitialCards(cards);

      return userId
    })
    .catch(err => console.log(err))
  }, []);

  if (cards.length === 0) {
    return (
      <h1 className="profile__name">Loading</h1>
    )
  }

   return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-box">
          <img src={userAvatar} alt="Фото профиля" className="profile__avatar button" />
          <button className="profile__avatar-btn button" type="button" onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__title">
          <div className="profile__heading">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-btn button" type="button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__desc">{userDescription}</p>
        </div>
        <button className="profile__add-btn button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="places">
        <ul className="places__list">
          {cards.map((card) => (
            <Card card={card}
             key={card._id}
             onCardClick={props.onCardClick}/>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
