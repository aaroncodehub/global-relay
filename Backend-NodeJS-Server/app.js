const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8000

const tweetRoute = require('./routes/tweet')

app.use(express.json())
app.use(cors())
app.use('/', tweetRoute)


app.listen(port, () => console.log(`global relay tweet saver server listening on port ${port}`))