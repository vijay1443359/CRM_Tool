const express = require('express')
const app = express()
const path = require('path')	


mongodb.connect("mongodb://localhost/crmDB")




app.use('/', Home)
app.use('/components/Action', Action)
app.use('/components/Clients', Client)



app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || port, function(){
    console.log('server is running')
})