import { createContext } from "react";

const userContext=createContext({
    user:  {
    name:"pp",
    email:"pp@gmail.com"
}});

export default userContext;