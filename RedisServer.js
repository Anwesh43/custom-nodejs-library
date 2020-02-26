const CommandExecutor = require('./command-executor')
const {SERVER} = require('./constants')

class RedisServer {

    constructor() {
        this.commandExecutor = new CommandExecutor()
    }

    start() {
        this.commandExecutor.execute(SERVER,[])
    }

    onOutput(cb) {
        this.commandExecutor.handleStdout(cb)
    }

    stop() {
        this.commandExecutor.stop()
    }
}

module.exports = RedisServer
