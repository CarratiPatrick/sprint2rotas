import express from "express";
import controleUser from "./Controle/controle.js";
import banco from "./Banco/banco.js";

const app = express()
const port = 3000

app.use(express.json())

controleUser(app, banco)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})