import { IMG_CDN_URL } from "../config";
const FoodItem=({
    name,
    description,
    imageId,
    price,
})=>{
    return(
        <div className="w-[270px] p-2 m-2 shadow-xl bg-teal-50">
            <img src={IMG_CDN_URL+imageId} alt="img"/>
            <h2 className="font-bold tex-2xl">{name}</h2>
            <h3>{description}</h3>
            <h4>Rupees: {price/100}</h4>
        </div>
    )
};

export default FoodItem;