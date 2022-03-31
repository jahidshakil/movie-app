import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useEffect, useState } from "react";
import "./navbar.scss"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
        
    };
   

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className='container'>
                <div className='left'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='' />
                    <span>Home</span>
                    <span>Movies</span>
                    <span>Series</span>
                    <span>Trending</span>
                    <span>My List</span>

                </div>
                <div className='right'>
                    <Search className='icon'/>
                    <span>KIDS</span>
                    <Notifications className='icon'/>
                    <img src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg" alt='' />
                    <div className='profile'>
                        <ArrowDropDown className='icon' />
                        <div className='options'>
                            <span>Setings</span>
                            <span>Logout</span>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
  )
}

export default Navbar