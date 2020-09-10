import mongoose from 'mongoose';

const SmartphoneSchema = new mongoose.Schema({
    name: String,
    so: String,
    processor: String,
    screen: Number,
    mark: String,
    memoryRam: Number,
    memory: Number,
});

export default mongoose.model('Smartphone', SmartphoneSchema);