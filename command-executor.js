const {spawn} = require('child_process')

class CommandExecutor  {

    execute(command, args) {
        console.log(command)
        this.childProcess = spawn(command, args)
    }

    writeToStdin(command) {
        this.childProcess.stdin.write(command)
    }

    handleStdout(cb) {
        this.childProcess.stdout.on('data', (data) => {
            cb(data.toString())
        })
    }

    stop() {
        console.log(this.childProcess)
        console.log(this.childProcess.pid)
        this.childProcess.kill()
    }
}

module.exports = CommandExecutor
