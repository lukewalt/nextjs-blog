'use strict';

const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== `production`;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare()
.then(() => {
  const server = express();

  // simply mapped a custom route to our existing page "/post". We have also mapped query params
  server.get(`/p/:id`, (req, res) => {
    const actualPage = `/post`;
    const queryParams = { title: req.params.id };
    app.render(req, res, actualPage, queryParams)
  })

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if(err) throw err;
    console.log('> Serving on http://localhost:3000');
  })

}).catch( ex => {
  console.error(ex.stack);
  process.exit(1);
})
