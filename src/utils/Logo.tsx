import { Link } from "react-router-dom";

 

const Logo = () => {
    return (
        <Link to='/' className="text-4xl font-bold font-[Caveat]">
            <span className="text-yellow-500">Uni </span>
            <span className="text-white">Fitness</span>
        </Link>
    );
};

export default Logo;