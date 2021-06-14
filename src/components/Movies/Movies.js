import React from 'react'
import './movies.css'
import SingleMovie from './SingleMovie'

export default function Movies() {
    const array=[1,2,3,4,5]
    return (
        <div style={{marginLeft:"500px",marginTop:"100px"}}>
       <h1> Movies List </h1>
        {array.map(arr=>
            <SingleMovie/>)}
 
    </div>
    )
}
