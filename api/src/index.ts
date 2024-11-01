import { PORT } from "./config/envs";
import { server as app } from "./server";

app.listen(PORT, () => {
  console.log(`Escuchando peticiones en http://localhost:${PORT}`);
});
