
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
const buttonEdit = document.querySelector('.profile__button-edit').addEventListener('click', () => {
  popupProfile.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputBio.value = profileBio.textContent;
});

//Закрытие попапа изменения профиля.
const popupButtonCloseProfile = document.querySelector('.popup_profile-close').addEventListener('click', () => {
  popupProfile.classList.remove('popup_opened');
});

//Открытие попапа добавления карточки. 
const buttonAdd = document.querySelector('.profile__button-add').addEventListener('click', () => {
  popupCard.classList.add('popup_opened');
  inputTitle.value = "";
  inputLink.value = ""; 
});

//Закрытие попапа добавления карточки.
const popupButtonCloseCard = document.querySelector('.popup_card-close').addEventListener('click', () => {
  popupCard.classList.remove('popup_opened');
});


 //Функция едактирование профиля.
 function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileBio.textContent = inputBio.value;

};
// Прикрепляем обработчик к форме и обработчик к кнопке сохранения о закрытии попапа.
const buttonSaveProfile = document.querySelector('#profileSave').addEventListener('click', () => {
  popupProfile.classList.remove('popup_opened');
});
formProfile.addEventListener('submit', formSubmitHandler);

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


    //Функция добавления карточек из массива.
    initialCards.forEach((element) => {
      const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

      cardElement.querySelector('.card__title').textContent = element.name;
      cardElement.querySelector('.card__image').src = element.link;
      cardElement.querySelector('.card__image').alt = element.name;

      cards.append(cardElement);


      //Удаления карточек.
      cardElement.querySelector('.card__button-delete').addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
      });
      //Лайки на карточках.
      cardElement.querySelector('.card__button-like_active').addEventListener('click', (evt) => {
          evt.target.classList.toggle('card__button-like');
      });
      
          //Открытие и закрытие попапа с фотографией
          cardElement.querySelector('.card__image').addEventListener('click', () => {
            popupDescripton.textContent = element.name;
            popupImage.src = element.link;
            popupImage.alt = element.name;
            popupOpenImage.classList.add('popup_opened');
          });

          popupCloseImage.addEventListener('click', () => {
            popupOpenImage.classList.remove('popup_opened');
          });
        });
      
    


//Функция добавления карточек в массив через попап.
    function formSubmitAddCards(evt) {

      evt.preventDefault();

      initialCards.unshift({ name: inputTitle.value, link: inputLink.value });

      cardTitle.textContent = initialCards[0].name;
      cardImage.src = initialCards[0].link;

      const cardAdd = cardTemplate.querySelector('.card').cloneNode(true);
      cards.prepend(cardAdd);
      //Удаления карточек.
      cardAdd.querySelector('.card__button-delete').addEventListener('click', (evt) => {
        evt.target.closest('.card').remove();
      });
      //Лайки на карточках.
      cardAdd.querySelector('.card__button-like_active').addEventListener('click', (evt) => {
          evt.target.classList.toggle('card__button-like');
      });
      
      //Открытие и закрытие попапа с фотографией.
     cardAdd.querySelector('.card__image').addEventListener('click', () => {
        popupDescripton.textContent = initialCards[0].name;
        popupImage.src = initialCards[0].link;
        popupImage.alt = initialCards[0].name;
        popupOpenImage.classList.add('popup_opened');
          });

          popupCloseImage.addEventListener('click', () => {
            popupOpenImage.classList.remove('popup_opened');
          });
      
    };
    // Прикрепляем обработчик к форме и обработчик к кнопке сохранения о закрытии попапа.
    const buttonSaveCard = document.querySelector('#cardSave').addEventListener('click', () => {
      popupCard.classList.remove('popup_opened');
    });
    formCard.addEventListener('submit', formSubmitAddCards);
    

    
    
   



    
  