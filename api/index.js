module.exports = async (req, res) => {
  const { body } = req;
  res.send(`Hello, you just parsed the request body!`);
};
