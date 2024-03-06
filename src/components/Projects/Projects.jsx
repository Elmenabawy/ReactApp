import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default class Projects extends Component {
render() {
    return (
    <>
    <div className="row">
        <div className="col-md-8">
            <nav>
                <ul>
                    <li>
                        <Link to='Mobile'> Mobile Projects</Link>
                    </li>
                    <li>
                        <Link to='Web'> Web Projects</Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div className="col-md-8">
            <Outlet/>
        </div>
    </div>
    </>
    )
}
}
