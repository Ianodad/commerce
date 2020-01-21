import React, { Component } from 'react'

class index extends Component {
    render() {
        return (
            <div className="container">
                <div className="d-flex justify-content-between">
                    <div className="card mr-2" style={{ "width": "350px" }}>
                        <h1>feature</h1>
                    </div>
                    <div className="card mx-2" style={{ "width": "350px" }}>
                        <h1>feature 2</h1>
                    </div>
                    <div className="card ml-2" style={{ "width": "350px" }}>
                        <h1>feature 3</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
