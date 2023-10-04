import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu=()=>{
    const params=useParams(); //const {id}=useParams()
    const {rid}=params;
    const [restaurant, menuItems]=useRestaurant(rid);
    const dispatch=useDispatch(); 
    const handleAddItem=()=>{
        dispatch(addItem("Grapes "))
    }

    const addFoodItem=(item)=>{
        dispatch(addItem(item)); 
    }

 
    return !restaurant?(<Shimmer />): (
        <>
        <div className="flex">
            <div>
                <h1>Restaurant id:{rid}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL+restaurant.cloudinaryImageId} /> 
                <h3>{restaurant?.cuisines?.join(", ")}</h3>
                <h3>{restaurant.areaName}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>   
                <h3>{restaurant?.sla?.slaString}</h3>       
                <h3>{restaurant.costForTwoMessage}</h3>    
            </div>
            <div className="p-2 m-2 ">
            <h1>Menu</h1>
            {/* {console.log(Object.values(menu.itemCards))} */}
            <ul>
            {menuItems?.map((item) => (<li key={item?.id}>{item?.name}-<button className="m-1 bg-green-100" onClick={()=>addFoodItem(item)}>Add Item</button></li>))}
            </ul>
            </div>
            </div>
                     
        </>
    )
}
export default RestaurantMenu;