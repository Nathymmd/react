import React from 'react';
// import PropTypes from 'prop-types'

export default function Genre(props) {
  return (
    <>  
        <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                      <div className="card-body ">
                          {props.name ? props.name : " - "}
                      </div>
                </div>
        </div>
    </>
  );
}

