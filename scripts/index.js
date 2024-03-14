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
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(id, title, description, imgUrl) {
        const newActivity = new Activity(id, title, description, imgUrl);
        this.activities.push(newActivity);
    }

    // Método para eliminar una actividad por su id
    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    }
}

const activity1 = new Activity(1, "Salir a merendar comida vegana", "Es muy sana y liviana la comida", "https://www.cronicanorte.es/wp-content/uploads/2015/02/comida-familia-comer.png");
const activity2 = new Activity(2, "Salir a correr, te hace una vida saludable", "Correr es una excelente actividad física que beneficia tu salud", "https://www.marathonranking.com/wp-content/uploads/2021/12/beneficios-correr-1.jpg");
const activity3 = new Activity(3, "Leer un libro en el parque", "Disfruta de la naturaleza mientras te sumerges en una buena lectura", "https://www.pexels.com/photo/woman-in-white-dress-reading-book-4171557/");
const activity4 = new Activity(4, "Cocinar una nueva receta", "Experimenta en la cocina y prepara algo delicioso", "https://www.pexels.com/photo/selective-focus-photo-of-cooked-food-1099680/");
const activity5 = new Activity(5, "Hacer ejercicio en casa", "Sigue una rutina de ejercicio en casa para mantenerte activo", "https://www.pexels.com/photo/woman-in-white-shirt-doing-yoga-4587775/");

// Comprobar que las actividades se han creado correctamente
console.log(activity1);
console.log(activity2);
console.log(activity3);
console.log(activity4);
console.log(activity5);


