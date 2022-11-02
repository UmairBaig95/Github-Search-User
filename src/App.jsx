import React, { useState } from "react";
import "./App.css";
import Data from "./Components/Data";
import SearchForm from "./Components/SearchForm";
import Skeleton from "./Components/Skeleton";
import { useSelector} from "react-redux";

const App = () => {
  const data = useSelector((state) => state.searchUser)
  return (
    <>
      <SearchForm/>
      {data.loading ? <Skeleton/> : "" }
      <Data/>

    </>
  );
};

export default App;

