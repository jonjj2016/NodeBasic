// const fs = require('fs')
// // const files = fs.readdirSync('./')
// // console.log(files);
// fs.readdir('./', (err, files) => {
//     if (err) {
//         console.log(err);

//     } else {
//         console.log(files);

//     }
// })

//console.log(emetter);
// const Logger = require("./logger")
// const logger = new Logger()
// logger.on("logging", eventArguments => console.log(eventArguments.data))
// logger.on("messagelogged", arg => console.log(arg._id, arg.url))

// logger.log("message from root module")
// logger.message()
// const http = require('http');
// const server = http.createServer((req, res) => {
//     if (req.url === "/") {
//         console.log("home page")
//         res.write("Hello World")
//         res.end()
//     }
//     if (req.url === "/api/courses") {
//         res.write(JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9, {
//             name: "Jon"
//         }]))
//         res.end()
//     }
// })

// server.listen(3000, () => console.log("The server is running on port 3000"))