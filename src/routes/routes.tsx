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
                element:<Cartpage/>
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
    }
])