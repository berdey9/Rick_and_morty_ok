const app = require("../src/app");
const PORT = 3001;
const { conn } = require("./DB_connection");
conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
  });
});
//Index se encarga de levantar el servidor
