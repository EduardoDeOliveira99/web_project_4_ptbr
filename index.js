const editForm = document.querySelector(".edit__form-container");

const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const inputName = editForm.querySelector(".input__name");
const inputDescription = editForm.querySelector(".input__description");
const editProfile = document.querySelector(".profile__edit");
const editFormClose = document.querySelector(".form__button-close");
const saveFormEdit = editForm.querySelector(".form__button-submit");
const elementTemplate = document.querySelector("#grid__element").content;
const gridElement = elementTemplate
  .querySelector(".grid__element")
  .cloneNode(true);
const overlay = document.querySelector(".overlay");

const addImageForm = document.querySelector(".add-image__form-container");
const addImage = document.querySelector(".profile__add-image");

const imageTitle = addImageForm.querySelector(".input__name");
const imageLink = addImageForm.querySelector(".input__description");
const saveFormAddImage = addImageForm.querySelector(".form__button-submit");
const inputTitle = addImageForm.querySelector(".input__title");
const inputImage = addImageForm.querySelector(".input__image");

const initialGridElements = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const grid = document.querySelector(".photos__grid");

function createCard(name, link) {
  const gridElement = elementTemplate
    .querySelector(".grid__element")
    .cloneNode(true);

  gridElement.querySelector(".grid__description__text").textContent = name;
  gridElement.querySelector(".grid__image").src = link;

  grid.append(gridElement);

  const favIcon = gridElement.querySelector(".grid__element__fav-icon");

  favIcon.addEventListener("click", () =>
    favIcon.classList.toggle("grid__element__fav-icon_active")
  );

  const deleteCard = gridElement.querySelector(".grid__delete");

  deleteCard.addEventListener("click", () => gridElement.remove());

  const gridImage = gridElement.querySelector(".grid__image");

  gridImage.addEventListener("click", function () {
    const gridModal = document.querySelector(".photos__modal");
    gridModal.classList.add("photos__modal_active");
    overlay.classList.add("overlay_active");

    const modalImage = document.querySelector(".photos__modal__image");
    modalImage.src = link;
    const modalDescription = document.querySelector(
      ".photos__modal__description"
    );
    modalDescription.textContent = name;

    const modalCloseBtt = document.querySelector(".photos__modal__btt-close");
    modalCloseBtt.addEventListener("click", function () {
      gridModal.classList.remove("photos__modal_active");
      overlay.classList.remove("overlay_active");
    });
  });
}

initialGridElements.forEach(function (i) {
  return createCard(i.name, i.link);
});

function openEditForm() {
  editForm.classList.add("edit__form-container_active");
  overlay.classList.add("overlay_active");
}

editProfile.addEventListener("click", openEditForm);

function openAddImageForm() {
  addImageForm.classList.add("add-image__form-container_active");
  overlay.classList.add("overlay_active");
}

addImage.addEventListener("click", openAddImageForm);

function closeForm() {
  editForm.classList.remove("edit__form-container_active");
  overlay.classList.remove("overlay_active");
  addImageForm.classList.remove("add-image__form-container_active");
}

editFormClose.addEventListener("click", closeForm);

function editSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;

  addImageForm.classList.remove("add-image__form-container_active");
  editForm.classList.remove("edit__form-container_active");
  overlay.classList.remove("overlay_active");
}

saveFormEdit.addEventListener("click", editSubmit);

function addImageSubmit(evt) {
  evt.preventDefault();

  addImageForm.classList.remove("add-image__form-container_active");
  overlay.classList.remove("overlay_active");

  if (inputTitle.value && inputImage.value !== null) {
    createCard(inputTitle.value, inputImage.value);
  } else {
    alert("Por favor, insira valores válidos!");
  }
}

saveFormAddImage.addEventListener("click", addImageSubmit);
