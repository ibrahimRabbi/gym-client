import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import Layout from "../Layout/Layout";
import AllProduct from "../pages/allProducts/AllProduct";
import ShowSinglePro from "../pages/showProduct/ShowSinglePro";
import Cartpage from "../pages/cart/Cartpage";
import Payment from "../pages/payment/Payment";
import ProtectRoute from "../pages/protectRoute/ProtectRoute";
import Signin from "../components/form/signin";
import SignUp from "../components/form/signup";
import Dashboard from "../pages/dashboard/Dashboard";
import AddProduct from "../pages/dashboard/Addproduct";
import ManangeProduct from "../pages/dashboard/ManageProduct";




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
            },

            {
                path: 'cart',
                element: <ProtectRoute><Cartpage /></ProtectRoute>
            },     
        ],
        
    },
    {
        path: '/payment',
        element: <ProtectRoute><Payment/></ProtectRoute>
    },
    {
        path: '/sign-in',
        element: <Signin />
    },
    {
        path: '/sign-up',
        element:<SignUp/>
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'addproduct',
                element:<AddProduct/>
            },
            {
                index:true,
                element:<ManangeProduct/>
            }
        ]
    }
])