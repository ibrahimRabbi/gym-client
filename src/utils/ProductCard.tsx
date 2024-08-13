 import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLocation } from 'react-router-dom';



const ProductCard = ({ data }: any) => {

    const { image, title, price, rating } = data
    const location = useLocation()

    console.log(location)

    return (
        <div className={`flex flex-col justify-between items-center h-[500px] w-72 hover:shadow-lg`
}>
            <figure className="h-[60%] w-full">
                <img className="w-full h-full hover:scale-105 duration-100" src={image}/>
            </figure>
            <div className="h-[30%] mt-4 text-center box-border">
                <Rating className="w-[100px] mx-auto" value={rating}/>
                <h2 className={`text-sm font-semibold ${location.pathname === '/'? 'text-slate-200' : 'text-zinc-950'} mt-2`}>{title}</h2>
                <p className={`text-lg font-semibold ${location.pathname === '/' ? 'text-slate-200' : 'text-zinc-950'} mt-3`}>{price}-TK</p>
                <p className="text-sm text-gray-400">2 color available</p>
            </div>
        </div>

    );
};

export default ProductCard;