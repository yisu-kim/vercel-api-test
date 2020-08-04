module.exports = (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "Quick Replies Test",
          },
        },
      ],
      quickReplies: [
        {
          action: "message",
          messageText: "메세지 텍스트",
          label: "메세지",
        },
        {
          action: "block",
          messageText: "블록 메세지 텍스트",
          blockId: "5f27943c39d7400001d343dd",
          label: "블록",
        },
      ],
    },
  };

  res.status(200).send(responseBody);
};
