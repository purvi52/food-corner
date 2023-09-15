import { useEffect } from "react";

const Profile=()=>{
    useEffect(()=>{
        console.log("useEff");
    })
    console.log("render");
    return (
        <div>
            Profile Page
        </div>
    )
}
export default Profile;