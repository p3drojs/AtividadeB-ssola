import routes from "./routes";
import express from "express";

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', routes)

app.listen(8080, () => {
    console.log('INICIANDO DOG');
})