const {
    BrowserWindow,
    app
} = require("electron");
const net = require('net');


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    win.loadFile('index.html')
}

const server = net.createServer(function (socket) {

    console.log(`IsConnected = ${socket.connecting}`)

    socket.on('connect', function () {
        console.log(`${socket.address().address}:${socket.address().port}+ Connected`)
    })

    socket.on('data', function (data) {
        console.log("[Recieve]" + socket.localPort + " : " + data)
        writeData(socket, "Test")
    })
})

function writeData(socket, data) {
    var success = !socket.write(data)

    if (!success) {
        console.log("Client Send Fail");
    } else {
        console.log("[Send]" + data);
    }
}

app.whenReady().then(() => {
    createWindow();
    server.listen(10001, '0.0.0.0', function () {
        console.log(`Listening on 10001`)
    })
})