module.exports = (req, res) => {
  const {
    body: { bot, intent, action, userRequest },
  } = req;

  const params = Object.keys(action.params).join(",");

  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text:
              `폴백 테스트\n` +
              `Bot 이름: ${bot.name}\n` +
              `의도: ${intent.name}\n` +
              `파라미터: ${params}\n` +
              `사용자 발화: ${userRequest.utterance}`,
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
};
