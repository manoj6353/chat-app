const express = require("express");
const app = express();
app.set("view engine", "ejs");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

io.emit("some event", {
  someProperty: "some value",
  otherProperty: "other value",
});

const chat = require("./routes/route");
app.use("/", chat);

const port = 8000;
app.listen(port, () => {
  console.log(`listening on :${port}`);
});
