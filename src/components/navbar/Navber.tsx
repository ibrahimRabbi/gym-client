 
import Logo from "../../utils/Logo";
import SearchIcon from "../../utils/searchIcon";
import UserIcon from "../../utils/UserIcon";
import CartIcon from "../../utils/CartIcon";

 

const Navber = () => {
    return (
        <div className="navbar lg:w-[95%] w-full mx-auto pt-7">
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
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
               <Logo/>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal space-x-8 text-white font-semibold text-base">
                    <li>Accessories</li>
                    <li>Category</li>
                    <li>Cardio</li>
                    <li>Strength</li>
                    <li>Tools</li>
                    <li>Recovery</li>
                </ul>
            </div>
            <div className="navbar-end space-x-6 flex items-center ">
                <SearchIcon />
                <UserIcon />
                <CartIcon/>

            </div>
        </div>
    );
};

export default Navber;