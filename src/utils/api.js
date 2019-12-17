const axios = require("axios");

exports.fetchAllArticles = (topic, sort_by) => {
  return axios
    .get(`https://ryans-nc-news.herokuapp.com/api/articles`, {
      params: {
        topic,
        sort_by
      }
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

exports.fetchAllComments = article_id => {
  return axios
    .get(
      `https://ryans-nc-news.herokuapp.com/api/articles/${article_id}/comments`
    )
    .then(({ data }) => {
      return data.comments;
    });
};

exports.postComment = (comment, article_id) => {
  return axios
    .post(
      `https://ryans-nc-news.herokuapp.com/api/articles/${article_id}/comments`,
      comment
    )
    .then(({ data }) => {
      return data.comment;
    });
};

exports.removeComment = comment_id => {
  return axios.delete(
    `https://ryans-nc-news.herokuapp.com/api/comments/${comment_id}`
  );
};

exports.updateVotes = (section, section_id, votes) => {
  console.log(section, section_id, votes);
  return axios
    .patch(`https://ryans-nc-news.herokuapp.com/api/${section}/${section_id}`, {
      inc_votes: votes
    })
    .then(({ data }) => {
      return data;
    });
};
