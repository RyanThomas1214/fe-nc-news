const axios = require("axios");

exports.fetchAllArticles = topic => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/articles`, {
      params: { topic }
    })
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
