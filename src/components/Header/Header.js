import React, { useState, useEffect } from 'react';
import './header.css'
import logo from '../../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonPlusFill,BsFillEyeFill,BsFillHouseDoorFill,BsFillStarFill,BsChatFill,BsFillPeopleFill,BsCardList,BsFilm,BsChevronRight,BsChevronDown } from "react-icons/bs";


export default function Header() {

  const[classname,setClassname]=useState('not-visible')
  const[categoryClassname,setCategoryClassname]=useState('dropdown-closed')
  const[movieClassname,setMovieClassname]=useState('dropdown-closed')
  const[showClassname,setShowClassname]=useState('dropdown-closed')

  const[categoryArrowRight,setCategoryArrowRight]=useState('category-icon-right open')
  const[categoryArrowDown,setCategoryArrowDown]=useState('category-icon-down close')

  const[movieArrowRight,setMovieArrowRight]=useState('show-icon-right open')
  const[movieArrowDown,setMovieArrowDown]=useState('show-icon-down close')

  const[showArrowRight,setShowArrowRight]=useState('show-icon-right open')
  const[showArrowDown,setShowArrowDown]=useState('show-icon-down close')

  

  const toggleMenu=()=>{
      setClassname('not-visible')
  }
  const toggleMenu2=()=>{
    setClassname('visible')
}

const openMovieDropdown=()=>{
    setMovieClassname('dropdown-open')
    setMovieArrowRight('movie-icon-down close')
    setMovieArrowDown('movie-icon-down open')
}

const closeMovieDropdown=()=>{
    setMovieClassname('dropdown-closed')
    setMovieArrowRight('movie-icon-down open')
    setMovieArrowDown('movie-icon-right close')
}
const openShowDropdown=()=>{
    setShowClassname('dropdown-open')
    setShowArrowRight('show-icon-down close')
    setShowArrowDown('show-icon-down open')
}

const closeShowDropdown=()=>{
    setShowClassname('dropdown-closed')
    setShowArrowRight('show-icon-down open')
    setShowArrowDown('show-icon-right close')
}
 
const openCategoryDropdown=()=>{
    setCategoryClassname('dropdown-open')
    setCategoryArrowRight('category-icon-down close')
    setCategoryArrowDown('category-icon-down open')
  }

  const closeCategoryDropdown=()=>{
    setCategoryClassname('dropdown-closed') 
    setCategoryArrowRight('category-icon-down open')
    setCategoryArrowDown('category-icon-right close')
    
  }

    return (
        <div className="header-container">
            <div className={classname}>
                <div className="menu-container">
                    <div className="logo-image"><img src={logo} alt="logo"/></div>
                    <div className="streamit"><a className="streamit" href="/">STREAMIT</a></div>
                    <div className="burgermenu" onClick={toggleMenu}><GiHamburgerMenu/></div>
                </div>
                <div className="menu-options">
                    <div className="menu-item"><a href="/dashboard"><BsFillHouseDoorFill/> Dashboard</a></div>
                    <div className="menu-item"><a href="/ratings"> <BsFillStarFill/> Rating</a></div>
                    <div className="menu-item"><a href="/commentlist"> <BsChatFill/> Comments</a></div>
                    <div className="menu-item"><a href="/userlist"> <BsFillPeopleFill/> User</a></div>
                    <div className="menu-item category">
                       <div ><BsCardList/> Category</div> 
                       <div>
                         <BsChevronRight className={categoryArrowRight} onClick={openCategoryDropdown}/>
                         <BsChevronDown className={categoryArrowDown} onClick={closeCategoryDropdown}/>
                       </div>
                    </div>

                    <div className={categoryClassname}>
                        <div className="dropdown-item"><BsFillPersonPlusFill/> <a href="/addcategory">Add Category</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/categories"> Category List</a></div>
                    </div>
                    <div className="menu-item movie">
                        <div> <BsFilm/> Movie</div>
                       <div>
                         <BsChevronRight className={movieArrowRight} onClick={openMovieDropdown}/>
                         <BsChevronDown className={movieArrowDown} onClick={closeMovieDropdown}/>
                       </div>            
                    </div>

                    <div className={movieClassname}>
                        <div className="dropdown-item"> <BsFillPersonPlusFill/> <a href="/addmovie">Add Movie</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/movielist">Movie List</a></div>
                    </div>

                    
                    <div className="menu-item show">
                        <a href="/show"> <BsFilm/> Show</a>
                        <div>
                         <BsChevronRight className={showArrowRight} onClick={openShowDropdown}/>
                         <BsChevronDown className={showArrowDown} onClick={closeShowDropdown}/>
                       </div> 
                    </div>
                    <div className={showClassname}>
                        <div className="dropdown-item"> <BsFillPersonPlusFill/> <a href="/addshow">Add Show</a></div>
                        <div className="dropdown-item"> <BsFillEyeFill/> <a href="/shows">Show List</a></div>
                    </div>
                    
                </div>


            </div>
            <div className="header-logo">
                <div className="menu" onClick={toggleMenu2}><GiHamburgerMenu/></div>
                <div><img src={logo} alt="logo"/></div>
                <div>STREAMIT</div>
            </div>
            <div>
                <input  className="search-bar" placeholder="Search"/>
            </div>
            <div>
                <img className="header-profile-img" src="https://i.postimg.cc/C13Ccsp0/christiana-rivers-O-XIv-Dy0pcs-unsplash.jpg" alt="pic"/>
            </div>
            
        </div>
    )
}
