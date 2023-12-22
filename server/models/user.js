import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    id: Number,
    name: String,
    age: String,
    sex: String,
    phoneNo: Number
});

const user = mongoose.model('user', userSchema);

export default user;