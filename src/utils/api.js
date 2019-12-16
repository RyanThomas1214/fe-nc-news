const axios = require("axios");

exports.fetchAllArticles = () => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/articles`)
    .then(({ data }) => {
      return data.articles;
    });
};
