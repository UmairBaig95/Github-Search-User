const initialState = {
  query: "",
  page_No: 1,
  per_page: 30,
  totalRecord: null,
  responseListing: [],
  loading: false,
};
const searchUser = (state = initialState, action) => {
  switch (action.type) {
    case "settingQuery":
      return {
        ...state,
        query: action.payload,
      };
    case "changePageNumber":
      return { ...state, page_No: action.payload };
    case "FETCH_USER_REQUEST":
      return { ...state, loading: true, responseListing: [] };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        responseListing: action.payload.items,
        totalRecord: action.payload.total_count,
      };
    case "FETCH_USER_FAILURE":
      return { ...state, loading: true };
    default:
      return state;
  }
};
export default searchUser;

export const selectValue = (state) => state.searchUser;
