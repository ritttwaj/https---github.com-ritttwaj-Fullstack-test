const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(cors()); 

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the backend server! Use /api/click with POST to test the functionality.');
  console.log("Hello World")
});

app.post('/api/click', (req, res) => {
  let response = {
    points: 1, 
    prize: null 
    
  };

  
  if (Math.random() < 0.5) {
    response.points += 10;
  }

  
  if (Math.random() < 0.25) {
    response.prize = 'Generic Prize';
  }
  console.log('API Response:', response);

  
  res.json(response);


});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
