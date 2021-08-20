const express = require('express')
const app = express()
const port = 8081


app.get('/', (req, res) => {
    res.json({
        'name': 'Mohit',
        'email': 'mohit123@gmail.com',
    });
  })
  
app.get('/api/email', (req, res) => {
  res.json({
      'name': 'Mohit',
      'email': 'mohit123@gmail.com',
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})