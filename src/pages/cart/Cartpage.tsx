import Calculate from "../../components/cart/Calculate";
import CartCard from "../../components/cart/CartCard";
import { useGetCartdataQuery } from "../../redux/api/baseApi";
import './cart.css'
 

const Cartpage = () => {

    const {data,isLoading} = useGetCartdataQuery(undefined)

    if (isLoading) {
    return <h1>loadinng...</h1>
    }
    
   

    return (
        <section className='h-[100vh] '>
            <div className="mt-11 w-[90%] mx-auto gap-8 cartLayout relative">
                <div className="space-y-4">
                    {
                        data?.data?.map((v:Partial<string>) => {
                            return <CartCard  data={v} />
                        } )
                    }
                </div>
                
                <Calculate data={data.data} />
            </div>
        </section>
    );
};

export default Cartpage;