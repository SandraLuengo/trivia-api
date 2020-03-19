import axios from "axios";

const getToken = () => {
  return axios
    .get("https://opentdb.com/api_token.php?command=request")
    .then(token => token.data.token)
    .catch(err => console.log(err));
};
const getQuestions = token => {
  return axios
    .get(`https://opentdb.com/api.php?amount=10&token=${token}`)
    .then(questions => questions.data.results)
    .catch(err => console.log(err));
};

const getCategories = () => {
  return axios
    .get(`https://opentdb.com/api_category.php`)
    .then(categories => {
      let categoriesName = categories.data.trivia_categories.map(category => category.name);
      return categoriesName;
    })
    .catch(err => console.log(err));
};

export { getToken, getQuestions, getCategories };
