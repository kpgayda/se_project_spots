//html element selections for edit
const editProfileBtn = document.querySelector(".profile__edit-btn");//class on line 22
const editProfileModal = document.querySelector("#edit-profile-modal");//id on line 87
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector("#profile__name-input");
const editProfileDescriptionInput = editProfileModal.querySelector("#profile__description-input");
const editProfileForm = editProfileModal.querySelector(".modal__form");// class on lines 91 and 109

//html element selections for new
const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//This ensures that the edit post form will pop up when the edit post button is clicked
editProfileBtn.addEventListener("click", function(){
  editProfileNameInput.value = profileName.textContent;   //This line of code ensures that the textbox matches up with the name of the person
  editProfileDescriptionInput.value = profileDescription.textContent;    //This line of code ensures that the textbox matches up with the person's occupation(Did this one on my own.)
  editProfileModal.classList.add("modal__is-opened");
});

//This ensures that the close button in the edit profile form will work properly
editProfileCloseBtn.addEventListener("click", function(){
  editProfileModal.classList.remove("modal__is-opened");
});

//This ensures that the new post form will pop up when the new post button is clicked
newPostBtn.addEventListener("click", function(){
  newPostModal.classList.add("modal__is-opened");
});

//This ensures that the close button in the new post form will work properly
newPostCloseBtn.addEventListener("click", function(){
  newPostModal.classList.remove("modal__is-opened");
});


function handelEditProfileSubmit(evt){
  evt.preventDefault();
  profileName.textContent = editProfileNameInput.value;
  profileDescription.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal__is-opened");
}

function handleAddCardSubmit(evt){
  evt.preventDefault();


  editProfileModal.classList.remove("modal__is-opened");
}

editProfileForm.addEventListener("submit", handelEditProfileSubmit);


