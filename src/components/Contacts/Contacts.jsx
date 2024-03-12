import React from 'react'
import './Contacts.css'
export default function Contacts() {
  return (
   <>
      <section className='Contacts'>
        <div className='container'>
          <div className='text-center  my-5'>
            <h2 className='fw-bolder my-3'>Contact Section</h2>
            <div className='portfolio-icon'>
              <i className="fa-solid fa-star fa-xl"></i>
            </div>
          </div>
          <div className="w-50 m-auto my-5">
            <input type="text" placeholder='Name' className='form-control form-control-lg w-100 border-bottom border-0 mb-5'/>
            <input type="number" placeholder='Age' className='form-control form-control-lg w-100 border-bottom border-0 mb-5' />
            <input type="email" placeholder='Email' className='form-control form-control-lg w-100 border-bottom border-0 mb-5' />
            <input type="password" placeholder='Password' className='form-control form-control-lg w-100 border-bottom border-0 mb-5' />
            <button className='btn form-btn'>send</button>
          </div>
          
        </div>
        
      </section>
   </>
  )
}
