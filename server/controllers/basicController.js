const basicController = {};

// anytime we want a differnet method 
basicController.get = (req, res) => {
    res.json({
        message: 'Welcome to our API'
    });
};

export default basicController;

    
