import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./config/mongo.js";
import { routerAuth } from "./routes/auth.js";
import { routerConsent } from "./routes/consent.js";

const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(cors());
db().then(() => console.log("Conexion exitosa"));
app.use(routerAuth);
app.use(routerConsent);

app.listen(PORT, () => {
  console.log(`Server corriendo en el puerto ${PORT}`);
});
