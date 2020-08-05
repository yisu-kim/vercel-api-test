module.exports = (req, res) => {
  const {
    body: { userRequest },
  } = req;
  console.log(userRequest);
  const {
    block: {
      id: { blockId },
    },
  } = userRequest;

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "블록 ID입니다.",
            description: blockId,
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
};
