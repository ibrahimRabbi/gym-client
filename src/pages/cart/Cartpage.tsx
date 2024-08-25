import Calculate from "../../components/cart/Calculate";
import CartCard from "../../components/cart/CartCard";
import { useGetCartdataQuery, useGetUserQuery } from "../../redux/api/baseApi";
import './cart.css'


const Cartpage = () => {
    const { data: user } = useGetUserQuery(undefined)
    const { data, isLoading } = useGetCartdataQuery(user?.data?.email)
 
    if (isLoading) {
        return <h1>loadinng...</h1>
    }



    return (
        <section className=''>
            <div className="my-11 w-[90%] mx-auto gap-8 cartLayout">
                <div className="space-y-4">
                    {
                        data?.data?.map((v: Record<string, any>) => {
                            return <CartCard key={v._id} data={v} />
                        })
                    }
                </div>

                <Calculate data={data.data} />
            </div>
        </section>
    );
};

export default Cartpage;