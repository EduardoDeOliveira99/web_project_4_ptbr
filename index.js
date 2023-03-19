const editForm = document.querySelector(".edit__form-container");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = editForm.querySelector(".input__name");
const inputDescription = editForm.querySelector(".input__description");
const editProfile = document.querySelector(".profile__edit");
const editFormClose = document.querySelector(".form__button-close");
const saveFormEdit = editForm.querySelector(".form__button-submit");

const overlay = document.querySelector(".overlay");

const addImageForm = document.querySelector(".add-image__form-container");
const addImage = document.querySelector(".profile__add-image");

const InitialGridElements = [
   {
     name: "Vale de Yosemite",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
   },
   {
     name: "Lago Louise",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
   },
   {
     name: "Montanhas Carecas",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
   },
   {
     name: "Latemar",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
   },
   {
     name: "Parque Nacional da Vanoise ",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
   },
   {
     name: "Lago di Braies",
     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
   }
 ];

 const elementTemplate = document.querySelector("#grid__element").content;
 const gridElement = elementTemplate.querySelector(".grid__element").cloneNode(true);

 InitialGridElements.forEach(function (i) {
    gridElement.querySelector(".grid__description__text").textContent = i.name;
    gridElement.querySelector(".grid__image").src = i.link;
   });
   


 function openEditForm (){
    editForm.classList.add("edit__form-container_active");
    overlay.classList.add("overlay_active");
}

editProfile.addEventListener('click', openEditForm);


function openAddImageForm (){
   addImageForm.classList.add("add-image__form-container_active");
   overlay.classList.add("overlay_active");
}

addImage.addEventListener('click', openAddImageForm);


function closeForm (){
   editForm.classList.remove("edit__form-container_active");
   overlay.classList.remove("overlay_active");
   addImageForm.classList.remove("add-image__form-container_active");
}

editFormClose.addEventListener('click', closeForm);

function submit (evt){
    evt.preventDefault()
    profileName.innerHTML = inputName.value;
    profileDescription.innerHTML = inputDescription.value;
    editForm.classList.remove("edit__form-container_active");
    overlay.classList.remove("overlay_active");

}

saveFormEdit.addEventListener('click', submit);