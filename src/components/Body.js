import { useState,useEffect } from "react";
import { IMG_CDN_URL, restaurantList,swiggy_api_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import { datafilter } from "../utils/helper";
import useOnline from "../utils/useOnline";
//searchtxt is a local variable

const Body=()=>{
    const [searchtext,setsearchtext]=useState(""); 
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);

    useEffect(()=>{ 
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch(swiggy_api_URL);
        const json =await data.json();
        //optional chaining
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(allRestaurants);
    }

    const offline=useOnline();
    if(!offline)
    return <h1>🔴 Offline, Please check your internet connection! </h1>

    if(!allRestaurants)
    return null;

    // if(filteredRestaurants.length===0)
    // return <h1>No Restaurants match your filter</h1>

    return allRestaurants .length ===  0 ?<Shimmer/>:(
        <>
        <div className="search-container">
            <input type="text" className="search-input" placeholder="search khana" value={searchtext} 
                onChange={(e)=>{setsearchtext(e.target.value)}}
            />  
            <button 
            className="search-btn" 
            onClick={()=> {
                    const data=datafilter(searchtext,allRestaurants);
                    setFilteredRestaurants(data);
            } }
            >search</button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurants?.map((restaurant)=>{
                return (
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}><RestaurantCard {...restaurant.info}   /></Link>
               
            );
            })}
        </div>
        </>
    );
};

export default Body;