const { Repository, Activity } = require("../scripts/index");

describe("Activity", function () {
    // Prueba para verificar si Activity tiene una función constructora
    it("tiene una función constructora", function () {
        expect(typeof Activity.prototype.constructor).toBe("function");
    });

    // Prueba para verificar la inicialización de datos en la instancia de Activity
    it("inicialización de datos", function () {
        const activity = new Activity(1, "title", "description", "imgUrl");
        expect(activity.id).toBe(1);
        expect(activity.title).toBe("title");
        expect(activity.description).toBe("description");
        expect(activity.imgUrl).toBe("imgUrl"); 
   
    });
 
    // Prueba repositori debe estar definido
    it("repository debe ser una clase", function () {
    expect(Activity).toBeDefined();
    expect(typeof Repository.prototype.constructor).toBe("function");
  });
});
 

