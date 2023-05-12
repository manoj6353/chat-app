const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("chat");
});
users = [];
io.on("connection", function (socket) {
  socket.on("setUsername", function (data) {
    if (users.indexOf(data) > -1) {
      socket.emit(
        "userExists",
        data + " username is taken! Try some other username."
      );
    } else {
      users.push(data);
      socket.emit("userSet", { username: data });
    }
  });
  socket.on("msg", function (data) {
    io.sockets.emit("newmsg", data);
  });
});

const port = 8000;
server.listen(port, () => {
  console.log(`listening on :${port}`);
});
