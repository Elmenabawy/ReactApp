import React from 'react'
import './Home.css';
export default function Home() {


    return (
    <>
    <header className='header vh-100 d-flex align-items-center justify-content-center text-center'>
        <div>
                    <img src="./images/boy.svg" alt="" className='w-50'/>
                    <h1 className='text-white fw-bolder my-3'>START FRAMEWORK</h1>
                    <div className='header-icon'>
                        <i className="fa-solid fa-star text-white fa-xl"></i>
                    </div>
            <p className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</p>

        </div>
    </header>
    </>
)
}
