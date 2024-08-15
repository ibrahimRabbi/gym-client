import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Layout from "../Layout/Layout";
import AllProduct from "../pages/allProducts/AllProduct";
import ShowSinglePro from "../pages/showProduct/ShowSinglePro";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/all-products',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AllProduct />
            },

            {
                path: ':id',
                element:<ShowSinglePro/>
            }
        ]
    },
])