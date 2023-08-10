import React, { Fragment } from "react";
// import React from 'react'
import FC2css from "../asset/css/FC2.css";

export const FC2 = (props) => {
  return (
    <Fragment>
      <div className="mainDiv">
        <div className="imageDiv">
          <img src={props.image} alt="..." />
        </div>
        <h5>{props.kingName}</h5>
      </div>
    </Fragment>
  );
};

// export default FC2
