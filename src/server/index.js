import express from 'express';
import path from 'path';

import logger from './middleware/logger';

import posts from './fixture';

const PORT = 9012;

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, '../../public')));

app.get('/posts', (req, res) => {
  setTimeout(() => {
    res.json(posts);
  }, 1400);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
