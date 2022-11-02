import client from "../../api";

export const settingQuery = (data) => {
  return { type: "settingQuery", payload: data };
};

export const changePageNumber = (num) => {
  return { type: "changePageNumber", payload: num };
};

export const fetchData = (query, page_no) => {
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_USER_REQUEST" });
    const res = await client
      .get(`users?q=${query}&page=${page_no}`)
      .then((res) => {
        dispatch({ type: "FETCH_USER_SUCCESS", payload: res.data });
      });
  };
};
