import express from 'express';

const app = express();

import routes from './routes';


app.use('/api', routes);  

export default app; 