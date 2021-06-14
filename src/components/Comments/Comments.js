import React from 'react'
import SingleComment from './SingleComment'
import './comments.css'
 
export default function Comments({comments}) {
    return (
        <div className="comments">
            <h1 style={{marginLeft:"20px"}}>Comments List</h1>
            <div className="table-titles">
                <div className="table-title table-item">Title</div>
                <div className="table-author table-item">Author</div>
                <div className="table-comment table-item">Comment</div>
                <div className="table-date table-item">Date</div>
             
                   
            </div>
            
            {comments.map(comment=>
                <SingleComment comment={comment}/>)}
        </div>
    )
}
