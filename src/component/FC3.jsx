import React from "react";


export const FC3 = (props) => {
    const obj = {
        margin: '0px auto',
        width: '150px' ,
        height: '150px'
    }
    const obj2 = {
        width: '100%',
        height: '100%'
    } 
  return (
    <>
      <div className="mainDiv">
        <div style={obj}>
          <img style={obj2} src={props.image} alt="..." />
        </div>
        <h5>{props.kingName}</h5>
      </div>
    </>
  );
};

// export default FC3
