import express from 'express';

const routes = express();

routes.get('/', (req, res) => {
    res.json({
        message: 'working'
    });
});

export default routes;