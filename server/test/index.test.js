const app = require("../src/app");
const session = require("supertest"); //Iniciamos sesion de testing
const agent = session(app);
describe("Test de rutas", () => {
  it("Test de prueba", () => {});

  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const response = await agent.get("/rickandmorty/character/1").expect(200);
      console.log(response);
    });
    it(`Responde un objeto con las propiedades: "id", "name", "species", "origin", "image", "gender" e "status`, async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(Object.keys(response.body)).toEqual([
        //Para que corra el test el orden tuvo que hacerse exactamente igual que la propiedad body
        "id",
        "name",
        "species",
        "origin",
        "image",
        "gender",
        "status",
      ]); // Le pedimos que las propiedades del objeto sean igual al arreglo
    });
    it("Responde con status: 500", () => {
      return agent
        .get("/rickandmorty/character/10000")
        .send()
        .then((response) => {
          expect(response.statusCode).toBe(500);
        });
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("La informacion de login es correcta", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=gonzalohb10@hotmail.com&password=gonzalo11"
      );
      const access = { access: true };
      expect(response.body).toEqual(access);
    });
    it("La informacion de login es incorrecta", async () => {
      const access = { access: false };
      const response = await agent.get(
        "/rickandmorty/login?email=gonzalhb10@hotmail.com&password=golalo11"
      );
      expect(response.body).toEqual(access);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: "1", name: "Lisandro" };
    const character2 = { id: "2", name: "Adalberto" };
    it("Devuelve el elemento del arreglo", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);
      expect(response.body).toContainEqual(character1);
    });
    it("Devuelve el elemento enviado", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character2);
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: "1", name: "Lisandro" };
    const character2 = { id: "2", name: "Adalberto" };
    it("Devuelve el arreglo correspondiente si no hay ningun personaje con el ID", async () => {
      const response = await agent.delete("/rickandmorty/fav/98");
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
    it("Elimina correctamente el personaje por su ID", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).toContainEqual(character1);
      //REVISAR BIEN EL ULTIMO TEST...
    });
  });
});
