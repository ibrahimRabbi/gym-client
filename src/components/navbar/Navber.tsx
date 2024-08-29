
import Logo from "../../utils/Logo";
import SearchIcon from "../../utils/searchIcon";
import UserIcon from "../../utils/UserIcon";
import CartIcon from "../../utils/CartIcon";
import { Link, useLocation } from "react-router-dom";
import { useGetCartdataQuery, useGetUserQuery } from "../../redux/api/baseApi";
import { Badge } from "antd";
 



const Navber = () => {
    const location = useLocation() 
    const {data:user} = useGetUserQuery(undefined)
    const { data } = useGetCartdataQuery(user?.data?.email)
    

    
    

    return (
        <div className={`navbar ${location.pathname === '/' ? 'bg-none' : 'bg-zinc-900'} w-full`}>
            <div className={`lg:w-[90%] w-full mx-auto ${location.pathname === '/' ? 'pt-4' : 'pt-1'}`}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="white">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link to='/'>Accessories</Link></li>
                            <li><a href='#category'>Category</a></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><Link to='/'>Strength</Link></li>
                            <li><Link to='/dashboard/manage-product'>Deshboard</Link></li>
                        </ul>
                    </div>
                    <Logo />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal space-x-5 text-white font-[Caveat] font-semibold text-xl">
                        <li><Link to='/'>Accessories</Link></li>
                        <li><a href='#category'>Category</a></li>
                        <li><a href='#about'>About Us</a></li>
                        <li><Link to='/'>Strength</Link></li>
                        <li><Link to='/dashboard/manage-product'>Deshboard</Link></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-8 flex items-center ">
                    <SearchIcon />
                    <UserIcon />
                    <Badge count={data?.data?.length}>
                        <Link to='/products/cart'> <CartIcon /></Link>
                    </Badge>
                </div>
            </div>

        </div>
    );
};

export default Navber;