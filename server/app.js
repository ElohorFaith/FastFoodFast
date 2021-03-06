import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

import createTables from './models/index';

const app = express();

if (process.env.NODE_ENV !== 'test') {
  // logic to create menu, users and orders model

  (async () => {
    try {
      await createTables();
    } catch (err) {
      throw err;
    }
  })();
}


app.set('port', process.env.PORT || 5002);

// use body parser to parse request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/v1', router);


app.get('*', (req, res) => {
  res.json({ message: 'Welcome to Priceless API Page' });
});

app.listen(app.get('port'), () => {
  console.log(`Server started Listening at localhost:${app.get('port')}`);
});

export default app;
