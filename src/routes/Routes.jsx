import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import NewsLayout from "../layouts/NewsLayout.jsx";
import News from "../pages/News/News/News.jsx";
import LoginLayout from "../layouts/LoginLayout.jsx";
import Login from "../pages/Login/Login/Login.jsx";
import Register from "../pages/Login/Register/Register.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Terms from "../pages/Shared/Terms&Condition/Terms.jsx";



const router = createBrowserRouter([
    {
            path:'/',
            element:<LoginLayout></LoginLayout>,
            children:[
                {
                    path:'/',
                    element:<Navigate to='/category/0'></Navigate>
                },
                {
                    path:'/login',
                    element:<Login></Login>
                },
                {
                    path:'/register',
                    element:<Register></Register>
                },
                {
                    path:'/terms',
                    element:<Terms></Terms>
                }
            ]
    },
    {
        path:'/category',
        element:<Main></Main>,
        children:[
            {
               path:':id', 
               element:<Category></Category>,
               loader: ({params}) => fetch(`https://the-world-daily-news-server-mytoi8q3b-firozhossain82.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoute><News></News></PrivateRoute>,
                loader:({params}) => fetch(`https://the-world-daily-news-server-mytoi8q3b-firozhossain82.vercel.app/news/${params.id}`)
            }
        ]
    }
])

export default router;