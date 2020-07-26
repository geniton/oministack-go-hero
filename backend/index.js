const express = require('express');

const app = express();

app.get('/', (request, response) => {
   return response.json({
      evento: 'Semana Oministack',
      nome: 'Geniton Lima'
   })
})

app.listen(3333)