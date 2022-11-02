import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { settingQuery, fetchData } from "../redux/action/searchUserAction";
import "../Style/SearchForm.css";
const SearchForm = () => {
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const handleClick = () => {
    if (inputData) {
      dispatch(settingQuery(inputData));
      dispatch(fetchData(inputData, 1));
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center my-3">Search GitHub User</h1>
        <div className="row d-flex justify-content-center my-3">
          <div className="col-md-8">
            <div className="search">
              <input
                type="text"
                className="form-control"
                placeholder="Search User"
                onChange={(e) => setInputData(e.target.value)}
              />
              <button className="btn btn-primary" onClick={handleClick}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchForm;
