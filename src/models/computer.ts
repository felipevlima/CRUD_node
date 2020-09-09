import mongoose from 'mongoose';

const ComputerSchema = new mongoose.Schema({
  model: String,
});

export default mongoose.model('Computer', ComputerSchema);
