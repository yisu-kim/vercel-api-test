module.exports = (req, res) => {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          commerceCard: {
            description: "따끈따끈한 보물 상자 팝니다.",
            price: 10000,
            discountRate: 10,
            discountedPrice: 9000,
            currency: "won",
            thumbnails: [
              {
                imageUrl:
                  "http://k.kakaocdn.net/dn/83BvP/bl20duRC1Q1/lj3JUcmrzC53YIjNDkqbWK/i_6piz1p.jpg",
                link: {
                  web: "https://store.kakaofriends.com/kr/products/1542",
                },
              },
            ],
            profile: {
              imageUrl:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4BJ9LU4Ikr_EvZLmijfcjzQKMRCJ2bO3A8SVKNuQ78zu2KOqM",
              ninkname: "보물상자 팝니다.",
            },
            buttons: [
              {
                label: "구매하기",
                action: "webLink",
                webLinkUrl: "https://store.kakaofriends.com/kr/products/1542",
              },
              {
                label: "전화하기",
                action: "phone",
                phoneNumber: "354-86-00070",
              },
              {
                label: "공유하기",
                action: "share",
              },
            ],
          },
        },
      ],
    },
  };

  res.status(200).send(responseBody);
};
