const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
  const responseObject = {
    success: true,
    code: 200,
    data: [
      {
        name: 'John Doe',
        age: 10,
      },
      {
        name: 'Jane Doe',
        age: 10,
      },
    ],
  };
  res.status(200).json(responseObject);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
