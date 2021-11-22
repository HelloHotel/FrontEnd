const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/',(req,res)=>{
    res.send('socketio...');
})

io.on('connection', (socket) => {
    console.log(`user ${socket.id} is connected.`)

    socket.on('message', data => {
        socket.broadcast.emit('message:received', data)
    })

    socket.on('disconnect', () => {
        console.log(`user ${socket.id} left.`)
    })
})

http.listen(3000, () => {
    console.log('Chat server is running on 3000')
})
module.exports = app;