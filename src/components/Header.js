import { useState,useContext } from "react";
import Logo from "../assets/img/food.jpeg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const AuthenticatedUser=()=>{
    return true;
}
export const Title=()=>{
return (
    <a herf="/">
        <img className="h-28 p-2" alt="logo" src={Logo} />
    </a>
)}

const HeaderComponent=()=>{
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const isOnline=useOnline();
    const {user}=useContext(userContext);
    const cartItems= useSelector(store=>store.cart.items)
    console.log(cartItems);

    return (
        <div className="flex justify-between bg-cyan-500 shadow-lg sm:bg-blue-50">  
    <Title/>
        {/* <div className="flex"> */}
        <ul className="flex py-10 ">
            <Link to="/">
            <li className="px-2">Home</li>
            </Link>
            <Link to="/about">
            <li className="px-2">About</li>
            </Link>
            <Link to="/contact">
            <li className="px-2">Contacts</li>
            </Link>
            <Link to="/cart">
            <li className="px-2">Carts-{cartItems.length} items</li>
            </Link>
            <Link to="/instamart">
            <li className="px-2">Instamart</li>
            </Link>   
        </ul>
        {/* </div> */}
        <h1>{isOnline?"✅":"🔴"}</h1><h1 >{user.name}</h1>
        {isLoggedIn?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>}
    </div>
    );
    };

    export default HeaderComponent;