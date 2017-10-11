import express from 'express';
import path from 'path';

import logger from './middleware/logger';

const PORT = 9012;

const app = express();

app.use(logger);
app.use(express.static(path.join(__dirname, '../../public')));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
