import axios from "axios";

axios.defaults.baseURL = "https://opentdb.com";

export function getAllCategories(postId) {
  return async function (dispatch) {
    const url = "/api_category.php";
    const res = await axios(url);
    return dispatch({
      type: "GET_ALL_CATEGORIES",
      payload: res?.data?.trivia_categories,
    });
  };
}
function objectToQueryString(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
export function getQuestions(obj, choosedCategories) {
  return async function (dispatch) {
    const url = "/api.php?";

    var searchURL = "";
    choosedCategories.forEach(function (e) {
      searchURL += "category=" + e.value + "&";
    });
    searchURL = searchURL.trim("&");
    var queryString = objectToQueryString(obj);
    var resURL = url + searchURL.concat(queryString);
    const res = await axios(resURL);
    return dispatch({
      type: "GET_QUESTIONS",
      payload: res?.data?.results,
    });
  };
}
