import React from 'react'

const FC5 = (props) => {
  return (
    <>
      <div className="col mainDivFC4">
        <div className="card ">
          <img src={props.image} class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-text">{props.name} </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default FC5