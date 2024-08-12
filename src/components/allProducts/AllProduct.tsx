import { useGetProductQuery } from "../../redux/api/baseApi";
import ProductCard from "../../utils/ProductCard";

export type Tproduct = {
    _id?: string,
    title: string,
    description: string,
    price: number,
    image: string,
    rating?: number
    isdeleted?: boolean
}

const AllProduct = () => {

    const {data}= useGetProductQuery(undefined)

 

    return (
        <div className="text-slate-300 h-[100vh] mt-16 grid grid-cols-4 w-[90%] mx-auto">
            {
                data?.data.map((v:Partial<Tproduct>) => {
                    return <ProductCard key={v._id} data={v} /> 
                })
             }
        </div>
    );
};

export default AllProduct;