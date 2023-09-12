import { useState } from "react";
import Logo from "../assets/img/food.jpeg";
import { Link } from "react-router-dom";
const AuthenticatedUser=()=>{
    return true;
}
export const Title=()=>{
return (
    <a herf="/">
        <img className="logo" alt="logo" src={Logo} />
    </a>
)}

const HeaderComponent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    return (
    <div className="header">
    <Title/>
        <div className="nav-items">
        <ul>
            <Link to="/">
            <li>Home</li>
            </Link>
            <Link to="/about">
            <li>About</li>
            </Link>
            <Link to="/contact">
            <li>Contacts</li>
            </Link>
            <li>Carts</li>
        </ul>
        </div>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
        
        
    </div>
    );
    };

    export default HeaderComponent;