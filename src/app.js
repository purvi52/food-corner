import {createElement as ce, Children} from "react";
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
//functional Component
//Name of the component starts with capital letter although not mandatory but a good practice and convention 


const AppLayout=()=>(
        <div>
            <HeaderComponent/>
            <Outlet /> 
            <Footer/>
        </div>
);

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
                errorElement: <Error />
            },
            {
                path:"/contact",
                element:<Contact />,
                errorElement:<Error />
            },
            {
                path:"/restaurant/:rid",
                element:<RestaurantMenu />
            }
        ]
    }]
);  


const root=ReactDOM.createRoot(document.getElementById("root"));
//   // when i have to render react element then we write like this
root.render(<RouterProvider router={appRouter} />   ) // when i have to render react component  then we write like this