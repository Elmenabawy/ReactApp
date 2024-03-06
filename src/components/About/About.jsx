import React, { useContext } from 'react'
import { CounterContext } from '../../CounterContext'

export default function About() {

    let x =useContext(CounterContext);
return (
    <div className='p-5 bg-info'>
        <h2>About {x.count}</h2>
    </div>
)
}
