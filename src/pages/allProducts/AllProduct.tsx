import { useLocation } from "react-router-dom";
import { useGetProductQuery } from "../../redux/api/baseApi";
import ProductCard from "../../utils/ProductCard";
import Loader from "../../utils/Loader";
 

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

     
    const { state } = useLocation()
    const { data, isLoading } = useGetProductQuery(state? {search:state}:{})
 
    


    if (isLoading) {
        return <Loader/>
    }
      
    return (
        
        <div className=" my-16 grid grid-cols-4 gap-5 w-[90%] mx-auto">
            {
                data?.data?.map((v:Partial<Tproduct>) => {
                    return <ProductCard key={v._id} data={v} /> 
                })
             }
        </div>
    );
};

export default AllProduct;