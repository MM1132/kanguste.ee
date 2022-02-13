const express = require('express')
const app = express()

// When there is a GET request to /, reserve this
/* 
app.get('/', (req, res) => {

})
 */
app.use(express.static('client'))

const server = app.listen(15500, () => {
    let port = server.address().port

    console.log(`Started kanguste.ee on port ${port}`)
})