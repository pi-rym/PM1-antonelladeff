const { Repository, Activity } = require("../scripts/index");

describe("Repository", function () {
  let repository;

  beforeEach(function() {
    repository = new Repository();
  });

  it("debería inicializarse con una lista de actividades vacía", function() {
    expect(repository.activities.length).toEqual(0);
  });

  it("debería inicializarse con id igual a 0", function() {
    expect(repository.id).toEqual(0);
  });
});
