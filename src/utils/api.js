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

exports.fetchSingleArticle = article_id => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    });
};
