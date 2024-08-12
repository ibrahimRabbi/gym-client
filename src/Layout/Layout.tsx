import { Outlet } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Footer from "../components/Footer/Footer";
import { useGetProductQuery } from "../redux/api/baseApi";

 
const Layout = () => {
    const { isLoading } = useGetProductQuery(undefined)
    
    if (isLoading) {
        return <p className="text-5xl">Loading....</p>
    }
    return (
        <main className="h-[100vh] bg-white">
            <Navber /> 
            <Outlet />
            <Footer/>
        </main>
    );
};

export default Layout;