import React from "react";
import css from '../asset/css/FunctionalComponent.css'

const FunctionalComponent = (props) => {
  return (
    <>
      <div className="col">
        <div class="card" style={{width:'90%', margin:'0 auto'}}>
          <img src={props.image} class="card-img-top" style={{height:'240px'}} alt="..." />
          <div class="card-body">
            <h5 class="card-title" >{props.name}</h5>
            <p class="card-text">{props.details}</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunctionalComponent;


// <div >{props.name}</div>
{/* <img src={props.image}  alt="" style={{width:'100px', height:'100px'}} /> */}