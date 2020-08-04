module.exports = (req, res) => {
  const { body } = req;
  console.log(body);
  let blockId;
  if (body && body.userRequest) {
    blockId = body.userRequest.block.id;
  }

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
