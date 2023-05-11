const express = require("express");
const route = express.Router();

const chat = require("../controller/chat-controller");

route.get("/", chat.chat);

module.exports = route;
