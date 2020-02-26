const {CLIENT, LOG_FILE} = require('./constants')
const {createWriteStream, createReadStream} = require('fs')
const CommandExecutor = require('./command-executor')

class RedisClient {

    constructor() {
        this.commandExecutor = new CommandExecutor()
        this.ws = createWriteStream(LOG_FILE)
        this.rs = createReadStream(LOG_FILE)

    }

    cliMode() {
        this.commandExecutor.pipe(process.stdin)
        this.commandExecutor.handleStdout(console.log)
    }

    connect() {
        this.commandExecutor.execute(CLIENT, [])

        this.commandExecutor.pipe(this.rs)
    }

    set(key, value, cb) {
        this.ws.write(Buffer.from(`SET ${key} ${value}\n`))
        if (typeof cb === "function") {
            this.commandExecutor.handleStdout(cb)
        }
    }

    get(key, cb) {
        this.ws.write(Buffer.from(`GET ${key}\n`))
        this.commandExecutor.handleStdout(cb)
    }

    stop() {
        this.commandExecutor.stop()
        this.ws.close()
    }
}
module.exports = RedisClient
