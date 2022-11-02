import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Style/Skeleton.css";
import { changePageNumber, fetchData } from "../redux/action/searchUserAction";
import ReactPaginate from "react-paginate";
const Data = () => {
  const StateData = useSelector((state) => state.searchUser);
  const dispatch = useDispatch();
  const handlePageClick = (data) => {
    const pagenum = data.selected + 1;
    dispatch(changePageNumber(pagenum));
    if (StateData.query) {
      dispatch(fetchData(StateData.query, pagenum));
    }
  };
  return (
    <>
      {StateData.responseListing.length === 0 ? (
        <div></div>
      ) : (
        <div className="container">
          <div className="row">
            {StateData.responseListing.map((e, i) => {
              return (
                <div key={e.id} className="p-3 col-md-6 col-lg-4">
                  <div className="skeleton min-hight">
                    <div className="col-3">
                      <img src={e.avatar_url} alt="avatar" />
                    </div>
                    <div className="col-1"></div>
                    <div className="col-8">
                      <div className="fw-bold word-break">
                        User ID: {e.login}
                      </div>
                      <div className="text_url">
                        <span className="fw-bold">Link:</span>&nbsp;
                        {e.followers_url}
                      </div>
                      <div className="text_url">
                        <span className="fw-bold">ID:</span>&nbsp;{e.id}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {StateData.query && StateData.totalRecord != 0 && StateData.totalRecord >= 30 ? (
        <ReactPaginate
          previousLabel={<>&laquo;</>}
          nextLabel={<>&raquo;</>}
          breakLabel={"..."}
          pageCount={Math.ceil(StateData.totalRecord / 30)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={1}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          nextClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default Data;
