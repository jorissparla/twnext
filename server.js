
const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt')
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    console.log('creating server ')
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
    
  }).listen(5000, err => {
    if (err) throw err;
    console.log('> Ready on https://localhost:5000');
  });
});