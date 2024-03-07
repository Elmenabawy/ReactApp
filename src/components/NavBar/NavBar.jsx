import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css';
export default class NavBar extends Component {
render() {
    return (
    <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark end-0 start-0 top-0 py-4">
                <div className="container ">
                    <Link className="navbar-brand fw-bold text-white" to={"/"}>START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-link fw-bold text-white me-3" to={"/About"}>ABOUT</Link>
                            <Link className="nav-link fw-bold text-white me-3" to={"/Portfolio"}>PORTFOLIO</Link>
                            <Link className="nav-link fw-bold text-white me-3" to={"/Contacts"}>CONTACTS</Link>
                        </div>
                    </div>
                </div>
            </nav>

    </>
    )
}
}
