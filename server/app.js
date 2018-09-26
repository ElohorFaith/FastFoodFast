import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/orderRouter';

const app = express();

app.set('port', process.env.PORT || 5001);

// use body parser to parse request
app.use(bodyParser.json());

app.use('/api/v1/', router);

app.get('*', (req, res) => {
  res.json({ message: 'Welcome to Priceless API Page' });
});

app.listen(app.get('port'), () => {
  console.log(`Server started Listening at localhost:${app.get('port')}`);
});

export default app;
