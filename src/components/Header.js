import { Link } from "react-router-dom";
import {LOGO_URL} from "../utilities/constants";
import { useState } from "react";
const Header =()=>{
    const [loginbtn,setloginbtn] =useState("login");
    return(
    <header>
    <div className="Header">
        <div className="logo">
        <Link to="/"><img alt="logo" src={LOGO_URL} />            </Link>
        </div>
        <div className="tools">
            <ul>    
                <li>
                   <Link to="/">Home</Link> 
                    </li>
                <li><Link to="/about">Aboutus</Link></li>
                <li><Link to="/contact">Contactus</Link></li>
                <li>Cart</li>
                <button className="filter-btn"
                onClick={()=>setloginbtn(log=>log==="login"?"logout":"login")}>{loginbtn}</button>
            </ul>
        </div>
    </div>
    </header>
)};
export  default Header;