import express from 'express';

const app = express();

app.use(express.static(`${__dirname}/public`));

let cards = [];
for (let i = 0; i < 5; i++) {
  cards.push({
    name: 'Ian',
    age: 18,
    friends: 3,
    moments: 3,
    picture: 'https://avatars3.githubusercontent.com/u/401263?v=3&s=460'
  });
  cards.push({
    name: 'Tejas',
    age: 16,
    friends: 1,
    moments: 3,
    picture: 'https://avatars1.githubusercontent.com/u/5959235?v=3&s=460'
  });
}


app.get('/cards', (req, res) => {
  res.json({
    data: cards
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
