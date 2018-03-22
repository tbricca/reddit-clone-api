import mongoose from 'mongoose'; 

// Schema defines the whole model - the title, data type, the entire schema, data table, requirements 
const { Schema } = mongoose;

const userSchema = new Schema({ 
    username: {
        type: String,
        required: true,
        minlength: [5, 'Username must be 5 characters or more, ya dig?'],
    },
    password: {
        type: String,
        required: true,
        minlength: [5, 'Password must be 5 or more, come on, we are not trying to get hacked here'],
    },
});

// Write some encrption for Password 
 