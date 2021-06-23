const { response } = require('express');
const express = require('express');

const app = express();

app.get('/', (request, response) => {
  return response.json({
    currentDateTime: '2019-08-12T14:40Z',
  });
});

app.listen(3333);
