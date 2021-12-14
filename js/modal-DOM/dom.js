const modalForm = document.querySelector('.modal-form');

modalForm.addEventListener('submit', () => {});
function onFormSubmit(event) {
  event.preventDefault();
  console.dir(event.currentTarget.elements);
}
