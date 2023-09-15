import {useState, useEffect} from 'react';
import { RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY, swiggy_menu_api_URL} from '../config';

const useRestaurant=(rid)=>{

    const [restaurant,setRestaurant ]=useState(null);
    const [menuItems,setMenuItems ]=useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    async function getRestaurantInfo(){
        const data=await fetch(swiggy_menu_api_URL+rid);
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
    return [restaurant,menuItems];

};

export default useRestaurant;