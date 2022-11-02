import React from "react";
import "../Style/Skeleton.css";
const Skeleton = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square "></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w75 m10"></div>
                <div className="line"></div>

                <div className="line  w75"></div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square "></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w75 m10"></div>
                <div className="line"></div>
                <div className="line  w75"></div>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <div className="skeleton">
              <div className="skeleton-left flex1">
                <div className="square "></div>
              </div>
              <div className="skeleton-right flex2">
                <div className="line h17 w75 m10"></div>
                <div className="line"></div>
                <div className="line  w75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
