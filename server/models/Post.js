import mongoose from 'mongoose';

// Schema defines the whole model - the title, data type, the entire schema, data table, requirements 
const { Schema } = mongoose;
// this because mongoose's default promise library is deprecated
mongoose.Promise = global.Promise;

const postSchema = new Schema({
    title: { type: String, required: true },
    link: String,
    text: String,
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User' },
});

const Post = mongoose.model('Post', postSchema);

export default Post;