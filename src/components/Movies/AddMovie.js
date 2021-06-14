import React from 'react'
import './movies.css'

export default function AddMovie() {
    return ( 
        <div className="addmovie-container">
        <form className="addmovie-form-container">
        <div className="addmovie-title-text"><h1>Add Movie</h1></div>
            <div className="addmovie-row1">

                <div className="addmovie-column1">
                    <div className="addmovie-title addmovie-item"><input placeholder="Title"/></div>
                    <div className="addmovie-image addmovie-item" ><input  placeholder="Upload Image"/></div>
                    <div className="addmovie-category-quality">
                        <div className="addmovie-category addmovie-item">
                            <select className="addmovie-item" >
                              
                                    <option value="">Movie Category</option>
                                    <option>Thriller</option>
                                    <option>Comedy</option>
                                
                            </select>
                        </div>
                        <div className="addmovie-quality addmovie-item">
                            <select className="addmovie-item">
                                <option value="">Movie Quality</option>
                                <option>FullHD</option>
                                <option>HD</option>
                            </select>
                        </div> 
                    </div>
                    <div className="addmovie-description addmovie-item" ><input placeholder="Description" /></div>
                </div>

                <div className="addmovie-column2 addmovie-item addmovie-movie">
                    <input placeholder="Add Video" />
                </div>
                
            </div>
           
            <div className="addmovie-row2">
                <div className="addmovie-row2-year addmovie-item">
                     <input placeholder="Release Year"/>
                </div>
                <div className="addmovie-row2-language addmovie-item">
                     <select>
                         <option value="">Choose Language</option>
                         <option>English</option>
                         <option>Hindi</option>
                         <option>Turkish</option>
                     </select>
                </div>
            </div>
            <div className="addmovie-row3 addmovie-item">
                <input placeholder="Duration"/>
            </div>
            <div className="addmovie-buttons" >
                    <button className="addcategory-button submit-btn" >Submit</button>
                    <button className="addcategory-button cancel-btn" >Cancel</button>
            </div>
           
        </form>
    </div>
    )
}
