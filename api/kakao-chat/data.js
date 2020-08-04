module.exports = (req, res) => {
  const responseBody = {
    version: "2.0",
    data: {
      msg: "HI",
      name: "Ryan",
      position: "Senior Managing Director",
    },
  };

  res.status(200).send(responseBody);
};
