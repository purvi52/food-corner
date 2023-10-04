import {createElement as ce, Children,lazy,Suspense,useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import { Title } from "./components/Header"; //Named import
import HeaderComponent from "./components/Header"; //default import
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

//functional Component
//Name of the component starts with capital letter although not mandatory but a good practice and convention 
const Instamart=lazy(()=> import("./components/Instamart"));
//Upon on Demand loading=> upon render ->suspend loading-> 

const AppLayout=()=>
{
    const [user, setUser]=useState({
        name:"PP",
        email:"pp@gmail.com",
    });

    useEffect(()=>{
        //authenticate users 9721345466 
    },[])

return (
        <Provider store={store}>
            <HeaderComponent/>
            <Outlet /> 
            <Footer/>
        </Provider>
)};

const appRouter=createBrowserRouter(
    [{
        path:"/",
        element: <AppLayout />,  
        errorElement: <Error />,
        children:
        [
            {
                path:"/",
                element:<Body />,
                errorElement: <Error />
            },
            {
                path:"/about",
                element:<About />,
                errorElement: <Error />,
                children:[{
                    path: "profile", //path will be /about/profile
                    element: <Profile />,
                    errorElement: <Error />
                }]
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:<Error />
            },
            {
                path:"/restaurant/:rid",
                element:<RestaurantMenu />
            },
            {
                path:"/instamart",
                element:<Suspense fallback={<Shimmer/>}><Instamart /></Suspense>,
                errorElement:<Error />
            },
            {
                path:"/cart",
                element:<Cart/>,
                errorElement:<Error />
            }
        ]
    }]
);  


const root=ReactDOM.createRoot(document.getElementById("root"));
//   // when i have to render react element then we write like this
root.render(<RouterProvider router={appRouter} />   ) // when i have to render react component  then we write like this