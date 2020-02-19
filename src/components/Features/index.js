import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="card mr-2" style={{ width: "350px" }}>
            <h3>Premium Organic Beauty</h3>
          </div>
          <div className="card mx-2" style={{ width: "350px" }}>
            <h3>Lower Cost</h3>
          </div>
          <div className="card ml-2" style={{ width: "350px" }}>
            <h3>Faster Delivery</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default index;
