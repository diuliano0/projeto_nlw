import express from "express";

const app = express();

app.get('/', (request, response) => {
  return response.send('Ola téste novo');
});

app.listen(3333, () => console.log('Server is runing'));