import express from 'express';

const routes = express();

app.get('/', (req, res) => {
    res.json({
        message: 'working'
    });
})

export default routes;