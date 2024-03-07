import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
render() {
    return (
    <>
        <footer className="footer bg-dark text-center p-2 p-5 ">
                <div className="row py-5">
                    <div className="col-md-4 my-3">
                        <div className='text-white'>
                            <h3 className='fw-bold '>Location </h3>
                            <p className='fw-lighter '>2215 John Drive</p>
                            <p className='fw-lighter '> Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className='text-white'>
                            <h3 className='fw-bold '>AROUND THE WEB</h3>
                            <div className='icons'>
                                <i className="icon fa-brands fa-facebook me-3"></i>
                                <i className="icon fa-brands fa-twitter me-3"></i>
                                <i className="icon fa-brands fa-linkedin-in me-3"></i>
                                <i className="icon fa-solid fa-globe"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-3">
                        <div className='text-white'>
                            <h3 className='fw-bold'>ABOUT FREELANCER</h3>
                            <p className='fw-lighter '>Freelance is a free to use, licened Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
        </footer>
        <div className="footer-feet py-3">
            <div className="text-center">
                <h5 className='text-white fs-5 fw-light'>Copyright ©️<span>
                    <a href="http://www.github.com/Elmenabawy" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-white'>Elmenabawy</a>
                </span> 2024
                </h5>
            </div>
        </div>
    </>
    
    )
}
}
