import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import Routes from './routes';

const app = express();
const uri: string =
  'mongodb+srv://allures:allusers123@faculdade.xjync.mongodb.net/crud?retryWrites=true&w=majority';

app.use(cors());
app.use(express.json());

app.use(Routes);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

app.listen(3333, () => {
  console.log('🚀 Server running on port 3333');
});
