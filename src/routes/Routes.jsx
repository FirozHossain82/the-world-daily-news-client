import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home/Home/Home.jsx";
import Category from "../pages/Home/Category/Category.jsx";
import NewsLayout from "../layouts/NewsLayout.jsx";
import News from "../pages/News/News/News.jsx";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
               path:'/category/:id', 
               element:<Category></Category>,
               loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path:'/news',
        element:<NewsLayout></NewsLayout>,
        children:[
            {
                path:'/news/:id',
                element:<News></News>
            }
        ]
    }
])

export default router;