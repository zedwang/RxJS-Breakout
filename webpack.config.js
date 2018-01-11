let env = 'dev'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
	env = 'prod'
	module.exports = require('./config/webpack.'+ env)
} else {
    module.exports = require('./config/webpack.'+ env)
}