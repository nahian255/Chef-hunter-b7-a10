import {
    createBrowserRouter,

} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home";
import Blog from "../Component/Blog";
import Login from "../Component/Login";
import Register from "../Component/Register";
import ChefRecipes from "../Component/aboutChef/ChefRecipes";


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
                element: <ChefRecipes></ChefRecipes>,
                loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)
            }

        ]
    },









    // {
    //     path: '/',
    //     element: <Main />,
    //     children: [
    //         {
    //             path: '/:id',
    //             element: <Home></Home>,
    //             loader: ({ params }) => fetch(`http://localhost:3000/post/${params.id}`)
    //         }
    //     ]
    // },
    // {
    //     path: "/dashboard",
    //     element: <DashBoardLayout />,
    //     children: [
    //         {
    //             path: '/dashboard',
    //             element: <Dashboard></Dashboard>
    //         },
    //         {

    //             path: '/dashboard/products',
    //             element: <AllProduct></AllProduct>
    //         },
    //         {

    //             path: '/dashboard/add-product',
    //             element: <AddProduct></AddProduct>
    //         },
    //     ]
    // },
    // {
    //     path: "/catagory",
    //     element: <MainCatagory></MainCatagory>,
    //     children: [
    //         {
    //             path: "/catagory/using_id/:id",
    //             element: <NewCatagory></NewCatagory>,
    //             loader: ({ params }) => fetch(`http://localhost:3000/catagory/using_id/${params.id}`),
    //         }
    //     ]
    // },
]);


export default router;