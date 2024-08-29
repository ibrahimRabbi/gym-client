import { Outlet, useNavigate } from "react-router-dom";
import Navber from "../components/navbar/Navber";
import Footer from "../components/Footer/Footer";
import { useGetProductQuery } from "../redux/api/baseApi";
import { useAppDispatch, useAppSelector } from "../redux/hook";
 
import { FormEvent } from "react";
import { setClick } from "../redux/features/clickSlice";

 
const Layout = () => {
    const { isLoading } = useGetProductQuery(undefined)
    const click = useAppSelector(state => state.click.click)
   
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const searchHandler = (e: FormEvent) => {
        e.preventDefault()
       navigate('',{state:e.target.search.value})
       
    }





    if (isLoading) {
        return <p className="text-5xl bg-white">Loading....</p>
    }
    return (
        <main className="h-[100vh] bg-white">
            <Navber /> 
            <form onSubmit={searchHandler} className={` mt-2 w-1/2 mx-auto flex gap-2 ${click ? 'block' : 'hidden'}`} action="">
                <input type="search" placeholder='Search Product' name="search" id="" className={`w-full bg-slate-200  z-10 rounded-md p-3 flex justify-center mx-auto duration-150  outline-none`} />
                <input type="submit" value="submit" className='bg-yellow-500 btn border-none' />
            </form>
            <Outlet />
            <Footer/>
        </main>
    );
};

export default Layout;