import { Link, useLocation } from "react-router-dom";

 

const Logo = () => {
    const location = useLocation()
    console.log(location)
    return (
        <Link to='/' className="text-4xl font-bold font-[Caveat]">
            <span className="text-yellow-500">Uni </span>
            <span className={location.pathname.includes('/dashboard')? 'text-zinc-950':'text-white'}>Fitness</span>
        </Link>
    );
};

export default Logo;