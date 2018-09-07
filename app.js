import express from 'express';

const app = express();

app.set('port', process.env.PORT || 5000);

app.get('/', (req, res) => {
  res.send('Welcome to FastFoodFast API');
});

app.listen(app.get('port'), () => {
  console.log(`Server started Listening at localhost:${app.get('port')}`);
});
