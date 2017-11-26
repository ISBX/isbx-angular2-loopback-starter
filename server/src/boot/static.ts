import express = require('express');
import path = require('path');

export = (server) => {
  const outDir = __dirname + '/../../../client/dist';

  server.use(express.static(outDir));

  server.get('*', (req, res) => {
    if (server.get('env') !== 'development' && req.path.match(/\.(html|css|png|jpg|ttf|js|ico)$/)) {
      res.status(404).send('Not found');
    }
    const index = path.join(outDir, 'index.html');
    res.sendFile(index);
  });

};
