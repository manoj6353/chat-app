const chat = async (req, res) => {
  try {
    res.render("chat.ejs");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { chat };
