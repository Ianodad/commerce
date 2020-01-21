import React from 'react'

function Footer() {
    return (
        <div className="bg-success">
            <div className="d-flex justify-content-between">
                <div className="col-md-3">Pages
                    <li>
                        <ul>Home</ul>
                        <ul>Shop</ul>
                        <ul>About</ul>
                        <ul>Login</ul>
                        <ul>Sign Up</ul>
                    </li>
                </div>
                <div className="col-md-3">Contacts</div>
                <div className="col-md-3">Location</div>
                <div className="col-md-3">About</div>
            </div>
        </div>
    )
}

export default Footer
