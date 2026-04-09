import routes from "./routes";

const express = require('express');
const app = express();

app.use(express.json());

app.use('/api', routes)

app.listen(8080, () => {
    console.log('INICIANDO DOG');
})