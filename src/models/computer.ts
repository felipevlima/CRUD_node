import mongoose from 'mongoose';

const ComputerSchema = new mongoose.Schema({
  model: String,
  ram: Number,
  graphicCard: String,
  memory: String,
  processor: String,
});

export default mongoose.model('Computer', ComputerSchema);
