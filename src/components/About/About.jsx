import React from 'react'
import './About.css'


export default function About() {


return (
    < >
        <section className="About vh-100 text-center d-flex justify-content-center align-items-center">
            <div>
                <h2 className='text-white my-3'>ABOUT COMPONENT</h2>
                <div className='About-icon my-3'>
                    <i className="fa-solid fa-star text-white "></i>
                </div>
                <div className="container  my-3 ">
                    <div className="row w-75 m-auto">
                        <div className="col-md-6 ">
                            <p className='fw-light text-white text-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde explicabo ea ducimus quisquam, voluptatibus veniam temporibus doloribus tempora asperiores a!</p>
                        </div>
                        <div className="col-md-6">
                            <p className='fw-light text-white text-start'>Lorem ipsum dolor sit amet  elit. ducimus quisquam, dolor, obcaecati praesentium voluptatibus veniam temporibus doloribus tempora asperiores a!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}
