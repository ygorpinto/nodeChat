export default class SocketClient {
    #serverConnection

    constructor({host, port, protocol}){
        this.port = port
        this.host = host
        this.protocol = protocol
    }

    async createConnection () {
    const options = {
        port: this.port,
        host:this.host,
        headers: {
            Connection:'Upgrade',
            Upgrade:'websocket'
        }
    }

    const http = await import(this.protocol)
    const req = http.request(options)
    req.end()

    return new Promise (resolve => {
            req.once('upgrade',(res,socket) => resolve(socket))
        })

    }

    async initialize () {
        this.#serverConnection = await this.createConnection()
        console.log('i connected to the server !!')
    }   
}