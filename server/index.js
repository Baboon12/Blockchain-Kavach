
const express = require('express')

// Establishing Connection with MongoDB

const app = express()
const port = 3000

app.use(express.json())

// Creating Routes for each different paths
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/notes', require('./routes/notes'));
app.get('/', (req, res)=>{
  res.end('API is up and running.')
})
app.use('/api/bitcoin', require('./routes/bitcoin'));
app.use('/api/eth', require('./routes/eth'));


app.listen(port, () => {
  console.log(`App listening on port: http://localhost:${port}`)
})