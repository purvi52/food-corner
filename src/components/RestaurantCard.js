import { IMG_CDN_URL } from "../config";
const RestaurantCard=({
    name,
    cuisines,
    cloudinaryImageId,
    sla,
})=>{
    return(
        <div className="w-[270px] p-2 m-2 shadow-xl bg-teal-50">
            <img src={IMG_CDN_URL+cloudinaryImageId} alt="burger"/>
            <h2 className="font-bold tex-2xl">{name}</h2>
            <h3>{cuisines?.join(', ')}</h3>
            <h4>{sla?.lastMileTravelString}</h4>
        </div>
    )
};

export default RestaurantCard;