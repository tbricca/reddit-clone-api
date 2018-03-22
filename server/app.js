import express from 'express';

import routes from './routes';

const app = express();


// Middleware //

app.use('/api', routes);  

export default app; 