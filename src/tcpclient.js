const net = require('net');
const port = 10001
const host = '0.0.0.0'

const server = net.createServer(function (socket) {

    console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);
    console.log(`${socket.address().address}:${socket.address().port}`)

    socket.write('test')
    socket.on('data', function (data) {
        console.log(`[Recieve] ${data}`)
        writeData(socket, data)
    })

})

function writeData(socket, data) {
    data = "<s>"
    var success = socket.write(data)

    if (!success) {
        console.log("Client Send Fail");
    } else {
        console.log("[Send]" + data);
    }
}

exports.tcpServer = server;