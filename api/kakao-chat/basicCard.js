module.exports = (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          basicCard: {
            title: "보물상자",
            description: "보물 상자 안에는 뭐가 있을까",
            thumbnail: {
              imageUrl:
                "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
            },
            buttons: [
              {
                action: "message",
                label: "열어보기",
                messageText: "짜잔! 우리가 찾던 보물입니다.",
              },
              {
                action: "webLink",
                label: "구경하기",
                webLinkUrl: "https://e.kakao.com/t/hello-ryan",
              },
            ],
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
};
