// Definición de la clase Activity
class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}

// Definición de la clase Repository
class Repository {
  constructor() {
    this.activities = [];
    this.id = 0;
  }

  getAllActivities() {
    return this.activities;
  }

  // Método para crear una nueva actividad
  createActivity(title, description, imgUrl) {
    const id = this.id++;
    const activity = new Activity(id, title, description, imgUrl);
    this.activities.push(activity);
  }
 
  // Método para eliminar una actividad por su id
  deleteActivity(id) {
    id = parseInt(id);
    this.activities = this.activities.filter(activity => activity.id !== id);
  }
}

const repository = new Repository();
  
function handlerDeleteButton(event) {
  const activityId = event.target.id;
  repository.deleteActivity(activityId);
  convertAllActivities();
}

// Función para convertir una instancia de Activity en elemento HTML
if(typeof document !== 'undefined') {
  function createHTMLActivity(activity) {
    const { id, title, description, imgUrl } = activity;

    const htmlTitle = document.createElement('h3');
    htmlTitle.innerHTML = title;
    htmlTitle.classList.add('title-class');

    const htmlDescription = document.createElement('p');
    htmlDescription.innerHTML = description;
    htmlDescription.classList.add('description-class');

    const htmlImage = document.createElement('img');
    htmlImage.src = imgUrl;
    htmlImage.classList.add('image-class');

    const buttonHtml = document.createElement('button');
    buttonHtml.id = id; 
    buttonHtml.innerHTML = "Borrar";
    buttonHtml.classList.add('delete-button'); 

    buttonHtml.addEventListener("click", handlerDeleteButton);

    const containerHtml = document.createElement('div');
    containerHtml.appendChild(htmlTitle);
    containerHtml.appendChild(htmlDescription);
    containerHtml.appendChild(htmlImage);
    containerHtml.appendChild(buttonHtml);
    containerHtml.classList.add('card');
    containerHtml.id = "activity-card " + id;

    return containerHtml;
  }

  // Función para convertir todas las actividades en elementos HTML
  function convertAllActivities() {
    const containerActivities = document.getElementById("container-activities");
    containerActivities.innerHTML = '';

    const activities = repository.getAllActivities();
    const htmlActivities = activities.map((activity) => createHTMLActivity(activity));

    htmlActivities.forEach(activityHTML => { 
      containerActivities.appendChild(activityHTML);
    });
  }

  // Manejador de evento para el botón de agregar actividad
  function handlerButton(event) {
    event.preventDefault();
    const titleInput = document.getElementById('input-title');
    const descriptionInput = document.getElementById('input-description');
    const imageUrlInput = document.getElementById('input-img-url');

    const titleValue = titleInput.value;
    const descriptionValue = descriptionInput.value;
    const imgUrlValue = imageUrlInput.value;

    if (!titleValue || !descriptionValue || !imgUrlValue) {
      alert('Por favor, complete todos los campos');
      return;
    }

    repository.createActivity(titleValue, descriptionValue, imgUrlValue);
    convertAllActivities();

    // Limpiar los campos del formulario
    titleInput.value = '';
    descriptionInput.value = '';
    imageUrlInput.value = '';
  }

  // Evento click al botón de agregar actividad
  const agregar = document.getElementById("agregarActividadButton")
  agregar.addEventListener("click", handlerButton)

}

module.exports = {
    Activity,
    Repository,
}
