import React, { useState } from 'react'
import './Portfolio.css'
export default function Portfolio() {

  const[data,setData] = useState([
    { img: "./images/poert1.png" ,id:"img1"},
    { img: "./images/port2.png", id: "img5" },
    { img: "./images/port3.png", id: "img3" },
    { img: "./images/poert1.png", id: "img1" },
    { img: "./images/port2.png", id: "img2" },
    { img: "./images/port3.png", id: "img3" },
  ])

  return (
    <>
    <section className='portfolio py-5 text-center'>
        <h2 className='fw-bold my-4'>Portfolio Component</h2>
        <div className='portfolio-icon'>
          <i className="fa-solid fa-star fa-xl"></i>
        </div>
        <div className="container my-5">
          <div className="row g-3">
            {data.map((item)=>(
              <>
              <div className='col-md-4 '>
                <div className='portfolio-card'>
                    <img src={item.img} alt="" className=' w-100 rounded-3' />
                    <div data-bs-toggle="modal" data-bs-target={"#" + item.id} className="plus-overlay  rounded-3 text-center">
                      <i class=" text-white fa-solid fa-plus"></i>
                    </div>
                </div>
                
              </div>
              </>
            ))}
          </div>
          {data.map((item)=>(
            <>

              <div className="modal fade" id={item.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content ">

                    <div className="modal-body p-0 ">
                      <img src={item.img} className='w-100 rounded-3' alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
    </section>
    </>
  )
}
