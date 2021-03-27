// node index.js 
// --username ygorpinto
// --room sala01
// --hostUri 

import Events from 'events'
import TerminalControler from "./src/terminalControler.js";
import CliConfig from "./src/cliConfig.js";
import SocketClient from './src/socket.js';


const [nodePath,filePath,...commands] = process.argv
const config = CliConfig.parseArguments(commands)
const componentEmitter = new Events()
const socketClient = new SocketClient(config)
await socketClient.initialize()

// const controller = new TerminalControler()
// await controller.initializeTable(componentEmitter);

