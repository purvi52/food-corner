import { useState,useEffect } from "react";
import { IMG_CDN_URL, restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom"
//searchtxt is a local variable

function datafilter(searchtext,restaurants){
    return restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
)
}

const Body=()=>{
    const [searchtext,setsearchtext]=useState(""); 
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestaurants,setAllRestaurants]=useState([]);

    useEffect(()=>{ 
        getRestaurants();
    },[]);

    async function getRestaurants(){
        const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json =await data.json();
        //optional chaining
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(allRestaurants);
    }

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