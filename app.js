///////////////////////
// BUILT-IN MODULES //
/////////////////////
const os = require("os") // without the ./ node know it is built-in

const user = os.userInfo()
console.log(user)

// methode retunrs the system uptime in seconds
console.log(`the system uptime is ${os.uptime} seconds`)
