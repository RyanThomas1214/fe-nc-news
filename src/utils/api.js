const axios = require("axios");

exports.fetchAllArticles = () => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/articles`)
    .then(({ data }) => {
      return data.articles;
    });
};

exports.fetchAllTopics = () => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/topics`)
    .then(({ data }) => {
      return data.topics;
    });
};
