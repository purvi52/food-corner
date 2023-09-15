export function datafilter(searchtext,restaurants){
    return restaurants.filter((restaurant)=>
    restaurant?.info?.name?.toLowerCase()?.includes(searchtext.toLowerCase())
)
}