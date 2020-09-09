import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: String,
  cellphone: String,
  email: String,
  age: Number,
  cep: Number,
});

export default mongoose.model('User', UserSchema);
