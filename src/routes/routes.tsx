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
import UpdateProduct from "../pages/dashboard/Update";




export const routes = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/products',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <AllProduct />
            },
            {
                path: ':category',
                element: <AllProduct />
            },

            {
                path: ':category/:id',
                element: <ShowSinglePro />
            },

            {
                path: 'cart',
                element: <ProtectRoute><Cartpage /></ProtectRoute>
            },
        ],

    },
    {
        path: '/payment',
        element: <ProtectRoute><Payment /></ProtectRoute>
    },
    {
        path: '/sign-in',
        element: <Signin />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'addproduct',
                element: <AddProduct />
            },
            {
                path: 'manage-product',
                element: <ManangeProduct />
            },
            {
                path: 'upadte-product/:id',
                element: <UpdateProduct />
            }
        ]
    }
])