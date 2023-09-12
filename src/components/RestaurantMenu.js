import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL, RESTAURANT_TYPE_KEY, MENU_ITEM_TYPE_KEY } from "../config";
import Shimmer from "./Shimmer";
const RestaurantMenu=()=>{
    const params=useParams(); //const {id}=useParams()
    const {rid}=params;

    const [restaurant,setRestaurant ]=useState(null);
    const [menuItems,setMenuItems ]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId="+rid);
        const json=await data.json();
        const restaurantData=json?.data?.cards?.map(x=>x.card)?.find(x=>x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
        setRestaurant(restaurantData);
        // setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[1].card.card.itemCards);
        // console.log(json.data.cards[2]);
        const menuItemData= json?.data?.cards?.find(x=>x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x=>x.card?.card)?.
                            filter(x=>x['@type']== MENU_ITEM_TYPE_KEY)?.
                            map(x=>x.itemCards).flat().map(x=>x.card?.info) || [];
        setMenuItems(menuItemData);
    }
    return !restaurant?(<Shimmer />): (
        <>
        <div className="menu">
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
            <div className="menu-list">
            <h1>Menu</h1>
            {/* {console.log(Object.values(menu.itemCards))} */}
            <ul>
            {menuItems?.map((item) => (<li key={item?.id}>{item?.name}</li>))}
            </ul>
            </div>
            </div>
                     
        </>
    )
}
export default RestaurantMenu;