const {spawn} = require('child_process')

class CommandExecutor  {

    execute(command, args) {
        console.log(command)
        this.childProcess = spawn(command, args)
    }

    pipe(stream) {
        stream.pipe(this.childProcess.stdin)
    }

    writeToStdin(command) {
        console.log(command)
        this.childProcess.stdin.write(command)

    }

    handleStdout(cb) {
        this.childProcess.stdout.on('data', (data) => {
            cb(data.toString())
        })
    }

    stop() {
        this.childProcess.kill()
    }
}

module.exports = CommandExecutor
