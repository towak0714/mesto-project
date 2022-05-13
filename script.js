//Профиль и попап профиля.
const profileName = document.querySelector('.profile__name');
const profileBio = document.querySelector('.profile__bio');
const popupProfile = document.querySelector('.popup_profile');
const formProfile = document.querySelector('.form-profile');
const inputName = popupProfile.querySelector('#inputName');
const inputBio = popupProfile.querySelector('#inputBio');

//Карточки и попап добавления карточки.
const cardTemplate = document.querySelector('#card-template').content;
const popupCard = document.querySelector('.popup_card');
const formCard = document.querySelector('.form-card');
const cardImage = cardTemplate.querySelector('.card__image');
const cardTitle = cardTemplate.querySelector('.card__title');
const inputTitle = document.querySelector('#inputTitle');
const inputLink = document.querySelector('#inputImage');
const cards = document.querySelector('.cards');

//Попап открытия фотографии.
const popupDescripton = document.querySelector('.popup__descripton');
const popupImage = document.querySelector('.popup__image');
const popupOpenImage = document.querySelector('.popup_viewer');
const popupCloseImage = document.querySelector('.popup_viewer-close');


//Открытие попапа изменения профиля. 
const buttonEdit = document.querySelector('.profile__button-edit').addEventListener('click',  () => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent;
  inputBio.value = profileBio.textContent;
});

//Открытие попапа добавления карточки. 
const buttonAdd = document.querySelector('.profile__button-add').addEventListener('click', () => {
  openPopup(popupCard)
  inputTitle.value = cardTitle.textContent;
  inputLink.value = cardImage.textContent;
});



 //Функция редактирование профиля.
 function handleProfileFormSubmit(evt) {
  
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;
  
  closePopup(popupProfile);

};
// Прикрепляем обработчик к форме.
formProfile.addEventListener('submit', handleProfileFormSubmit);


//Добавление карточки через попап.
function handleCardsFormSubmit(evt) {

  evt.preventDefault();
  renderInitialCard({ link: inputLink.value, name: inputTitle.value}); 
  inputLink.value = ''; 
  inputTitle.value = ''; 

  closePopup(popupCard);
};
// Прикрепляем обработчик к форме.
formCard.addEventListener('submit', handleCardsFormSubmit);


//Массив карточек.
const initialCards = [
    {
      name: 'Полярные Зори',
      link: './images/polyarnzori.jpg'
    },
    {
      name: 'Хибины',
      link: './images/hibiny.jpg'
    },
    {
      name: 'Сейдо Озеро',
      link: './images/seodozero.jpg'
    },
    {
      name: 'Кольский полуостров',
      link: './images/kolskypoluostrov.jpg'
    },
    {
      name: 'Кировск',
      link: './images/kirovsk.jpg'
    },
    {
      name: 'Озеро Имандра',
      link: './images/imandra.jpg'
    }
];


//Функция которая генерирует карточку.
function createCard(item) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = item.name;
  
  // Удаление карточки.
  cardElement.querySelector('.card__button-delete').addEventListener('click', (evt) => {
    evt.target.closest('.card').remove();
  });
  //Лайк карточки.
  cardElement.querySelector('.card__button-like_active').addEventListener('click', (evt) => {
      evt.target.classList.toggle('card__button-like');
  });

  //Открытие и закрытие попапа с фотографией.
  cardElement.querySelector('.card__image').addEventListener('click', () => {
    popupDescripton.textContent = item.name;
    popupImage.src = item.link;
    popupImage.alt = item.name;
    openPopup(popupOpenImage);
  });
  closePopup(popupCloseImage);

  return cardElement;
};

// Добавление карточки.
const renderInitialCard = (item) => {
  cards.prepend(createCard(item));
};
initialCards.forEach((item) => {
  renderInitialCard(item);
});

 
// Функция закрытия попапов.
const popups = document.querySelectorAll('.popup')

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}  

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
     if (evt.target.classList.contains('popup__button-close')) {
        closePopup(popup)
      }
  })
});

//Функция открытия попапов.
function openPopup(popup) {
  popup.classList.add('popup_opened');
};

//Функция добавление карточек из попапа через Enter.
function SaveCardKey(evt) {
  if (evt.key === 'Enter') {
    handleCardsFormSubmit(evt);
  }
};