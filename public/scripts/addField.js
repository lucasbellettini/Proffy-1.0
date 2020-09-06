document.querySelector('#add-time')
.addEventListener('click', addField);

function addField() {
  const newFieldContainer= document.querySelector('.schedule-item').cloneNode(true)
  const fields = newFieldContainer.querySelectorAll('input')
  fields.forEach(field => {
    field.value = ''
  });
  document.querySelector('#schedule-item').appendChild(newFieldContainer)
}