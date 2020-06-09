import Mock from "mockjs";

Mock.mock("/api/users", (req, res) => {
  return Mock.mock({
    "user|5": [
      {
        name: "@cname",
        "id|+1": 1,
        "age|10-60": 0, //10-60以內的隨機數，0用來確定類型
        birthday: '@date("yyyy-MM-dd")', //年月日
        city: "@city(true)", //中國城市
      },
    ],
  });
});
