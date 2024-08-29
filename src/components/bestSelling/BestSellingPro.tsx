import {useGetProductQuery} from "../../redux/api/baseApi";
import ProductCard from "../../utils/ProductCard";
import Title from "../../utils/Title";
import { Tproduct } from "../../pages/allProducts/AllProduct";



const BestSellingPro = () => {

    const { data } = useGetProductQuery({rating:3,limit:4})

    return (
        <section className="mt-24 w-[90%] mx-auto">
            <Title title='Best Selling' />
            <div className="h-[100vh] mt-10 grid grid-cols-4 gap-5 w-full mx-auto">
                {
                    data?.data.map((v: Partial<Tproduct>) => {
                        return <ProductCard key={v._id} data={v} />
                    })
                }
            </div>
        </section>
    );
};

export default BestSellingPro;