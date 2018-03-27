import db from './../models';

const userController = {};
// whomever is using the pai will need to pass in 2 parameters (their username and password) which we get from the request body 
userController.post = (req, res) => {
    // This pulls the uername and password from our request body
    const {username, password} = req.body 


    // Validation goes here
    // this creates the new instance of the user
    const user = new db.User({
        username, 
        password
    });

    // this saves it to the database
    user.save().then((newUser) => {
        res.status(200).json({
            success: true,
            data: newUser,
        });
    }).catch((err) => {
        res.status(500).json({
            message: err,
        });
    });
}

export default userController;
