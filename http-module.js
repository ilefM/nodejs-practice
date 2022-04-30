const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page")
    }
    if (req.url === "/about") {
        res.end("about page")
    }
    res.end(`<h1>THIS IS SOME HTML</h1>`)
})

server.listen(5000)
