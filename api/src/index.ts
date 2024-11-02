import { connectionDB } from "./config/connectionDB";
import { PORT } from "./config/envs";
import { app } from "./app";

connectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Escuchando peticiones en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
  });
