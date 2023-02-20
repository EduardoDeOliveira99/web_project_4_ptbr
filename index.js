
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = document.querySelector(".input__name");
const inputDescription = document.querySelector(".input__description");
const editProfile = document.querySelector(".profile__edit");
const editForm = document.querySelector(".edit__form-container");
const editFormClose = document.querySelector(".form__button-close");
const saveFormEdit = document.querySelector(".form__button-submit");
const overlay = document.querySelector(".overlay");

inputName.placeholder = profileName.textContent;
inputDescription.placeholder = profileDescription.textContent;

 function showClick (){
    overlay.classList.add("overlay_active");
    //editForm.classList.add("edit__form-container_active");
  
}

editProfile.addEventListener('click', showClick);



function showClick (){
   editForm.classList.toggle("edit__form-container_active");
}

editFormClose.addEventListener('click', showClick);

function submit (){
    profileName.innerHTML = inputName.value;
    profileDescription.innerHTML = inputDescription.value;
}

saveFormEdit.addEventListener('click', submit);