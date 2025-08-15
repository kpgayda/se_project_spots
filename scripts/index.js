const initialCards = [
  {
    name: "Val Thorens",
    link: "https: //practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//html element selections for edit
const editProfileBtn = document.querySelector(".profile__edit-btn"); //class on line 22
const editProfileModal = document.querySelector("#edit-profile-modal"); //id on line 87
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile__name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile__description-input"
);
const editProfileForm = editProfileModal.querySelector(".modal__form"); // class on lines 91 and 109

//html element selections for new
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const newPostDescriptionInput = document.querySelector(
  "#new__profile__description-input"
);
const newPostImageInput = document.querySelector("#new__profile__name-input");

//functions for repeats
function closeModal(modal) {
  modal.classList.remove("modal__is-opened");
}

function openModal(modal_2) {
  modal_2.classList.add("modal__is-opened");
}

//This ensures that the edit post form will pop up when the edit post button is clicked
editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileName.textContent; //This line of code ensures that the textbox matches up with the name of the person
  editProfileDescriptionInput.value = profileDescription.textContent; //This line of code ensures that the textbox matches up with the person's occupation(Did this one on my own.)
  openModal(editProfileModal);
});

//This ensures that the close button in the edit profile form will work properly
editProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
});

// This ensures that the new post form will pop up when the new post button is clicked
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

//This ensures that the close button in the new post form will work properly
newPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handelEditProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value);
  console.log(newPostDescriptionInput.value);
  closeModal(newPostModal);
}

editProfileForm.addEventListener("submit", handelEditProfileSubmit);
newPostModal.addEventListener("submit", handleAddCardSubmit);
