import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes';

const app = express();
const uri: string = 'mongodb://127.0.0.1:27017/local';

app.use(cors());
app.use(express.json());

app.use(Routes);

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333');
});
