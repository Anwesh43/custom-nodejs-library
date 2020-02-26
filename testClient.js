const RedisClient = require('./RedisClient')
const redisClient = new RedisClient()
redisClient.connect()
redisClient.set('A', 100)
redisClient.set('B', 32)
redisClient.get('A', console.log)
redisClient.get('B', console.log)
//redisClient.stop()
