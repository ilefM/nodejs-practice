// In nodejs every file is a module

const ilef = "ilefM"
const nodejs = "nodejs"

// since it this file is a module we can share some code we want (minimum we want)
// Alternatively  module.exports.aName = ilef
module.exports = {ilef, nodejs}

console.log(module)
