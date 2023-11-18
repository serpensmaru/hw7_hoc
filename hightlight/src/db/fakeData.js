const USID = require("usid");
const usid = new USID();

const videoList = [
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/Ao28h8lltXg",
    views: 5000,
  },
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/m6iRSVAnukA",
    views: 1200,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "Курсы от нетологии...",
    views: 1532,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "Титаны атакуют!",
    views: 155,
  },
  {
    id: usid.rand(7),
    type: "video",
    url: "https://www.youtube.com/embed/9OA6EW-zAA4",
    views: 4253,
  },
  {
    id: usid.rand(7),
    type: "article",
    title: "AMV топ-100",
    views: 9,
  },
];

export default videoList;
