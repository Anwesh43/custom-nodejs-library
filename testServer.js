const RedisServer = require('./RedisServer')
const redisServer = new RedisServer()
redisServer.start()
redisServer.onOutput(console.log)
