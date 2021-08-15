const {
    tcpServer
} = require("../src/tcpclient")

const port = 10001
const host = '0.0.0.0'
document.getElementById('btnConnect').addEventListener('click', function () {
    tcpServer.listen(port, host)
})