const { readFile, writeFile } = require("fs")
const util = require("util")
// Or we can also do require('fs').promises in line 1 so we dont need that
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        // This is waiting for the promise to be resolved.
        // Only when it is resolved, we can do something with the value
        const first = await readFilePromise("./content/first.txt", "utf-8")
        const second = await readFilePromise("./content/second.txt", "utf-8")
        await writeFilePromise(
            "./content/firstPromise.txt",
            `promises :\n ${first}\n ${second}`
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, "utf-8", (err, data) => {
//             if (err) {
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText("./content/first.txt")
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))
