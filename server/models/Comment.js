import mongoose from 'mongoose';

// Schema defines the whole model - the title, data type, the entire schema, data table, requirements 
const { Schema } = mongoose;
// this because mongoose's default promise library is deprecated
mongoose.Promise = global.Promise;

const commentSchema = new Schema({
    text: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    _creator: { type: Schema.ObjectId, ref: 'User' },
    _post: { type: Schema.ObjectId, ref: 'Post' },
   
});

const autoPopulateCreator = function(next) {
    this.populate({
        path: '_creator',
        select: 'username created -_id '
    });
};

commentSchema.pre('find', autoPopulateCreator);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;