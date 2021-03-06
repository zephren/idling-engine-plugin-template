const basePath = __dirname;
const http = require("http");
const fs = require("fs");
const path = require("path");

let server = null;

module.exports = class ServePlugin {
  apply(compiler) {
    compiler.hooks.done.tap("Serve Plugin", (
      stats /* stats is passed as an argument when done hook is tapped.  */
    ) => {
      if (!server) {
        server = http.createServer(function (req, res) {
          console.log("Fulfilling component request");

          const stream = fs.createReadStream(
            path.join(basePath, "dist/bundle.js")
          );

          stream.on("error", function (err) {
            console.log(err);
            res.writeHead(404);
            res.end();
          });

          res.writeHead(200, "", {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, OPTIONS",
            "Access-Control-Allow-Headers": "*",
            "Content-Type": "text/javascript",
          });

          stream.pipe(res);
        });

        server.listen(9999);
      }

      console.log("Serving component at http://localhost:9999");
    });
  }
};
