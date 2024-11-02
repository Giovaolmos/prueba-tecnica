import { connectionDB } from "./config/connectionDB";
import { PORT } from "./config/envs";
import { server as app } from "./server";

connectionDB().then(async () => {
  app.listen(PORT, () => {
    console.log(`Escuchando peticiones en http://localhost:${PORT}`);
  });
});
