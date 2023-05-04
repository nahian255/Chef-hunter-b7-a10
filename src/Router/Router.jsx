import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home";
import Blog from "../Component/Blog";
import Login from "../Component/Login";
import Register from "../Component/Register";
import ChefRecipes from "../Component/aboutChef/ChefRecipes";
import Private from "../Private/Private";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/chef/:id",
                element: <Private><ChefRecipes></ChefRecipes></Private>,
                loader: ({ params }) => fetch(`https://server-nahian255.vercel.app/chef/${params.id}`)
            },
            {
                path: '*',
                element: <div>
                    <img className="w-1/2 " src="https://cdn.vectorstock.com/i/1000x1000/85/43/error-page-not-found-vector-27898543.webp" alt="" />
                </div>

            }

        ]
    }
]);


export default router;