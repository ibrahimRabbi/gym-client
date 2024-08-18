import { Rating } from "@smastrom/react-rating";
import Counter from "../../components/QuantityCounter/Counter";
import Slider from "../../components/ImageSlider/Slider";
import { useGetSingleProductQuery } from "../../redux/api/baseApi";
import { useParams } from "react-router-dom";
import CartButtons from "../../components/AddCartButtons/CartButtons";
 

 

const ShowSinglePro = () => {

    const param = useParams()
    const { data,isLoading} = useGetSingleProductQuery(param.id)
      

    if (isLoading) {
        return <h1>Loading.....</h1>
    }


    return (
          
        <section>
            <div className="lg:w-[80%] w-[90%] lg:gap-16 gap-5 mx-auto mt-10 pb-20 grid lg:grid-cols-2 grid-cols-1">
                <Slider images={data?.data.image}/>

                <div className='mt-5'>
                    <p className="text font-semibold text-3xl">{data?.data.title}</p>
                    <p className="font-semibold mt-4 text-zinc-800 text-xs">
                        {data?.data.description}
                    </p>
                    <div className='flex mt-7 items-center justify-between'>
                        <div>
                            <p className='font-semibold'>Quantity:</p>
                            <Counter/>
                        </div>
                        <p className='font-semibold mt-5'>Available Stock- {data?.data?.stock > 0 ? data?.data?.stock : <span className='text-red-600'>Sold Out</span>}</p>
                    </div>
                    <div className='mt-4'>
                        <p className='font-semibold'>Available Sizes:</p>
                        {/* <div className='flex flex-wrap gap-4'>
                            {availableSize.map(v => {
                                return (
                                    <div key={Math.random()} onClick={() => sizeHandler(v)} className={`${size === v ? 'bg-[#613d26] text-slate-50 font-normal' : ''} border cursor-pointer border-[#613d26] font-semibold text-xs p-2 rounded-lg`}>
                                        {v} Inch
                                    </div>
                                )

                            })}
                        </div> */}
                    </div>
                    <ul className='list-disc font-semibold text-zinc-800 text-sm ml-5 mt-3'>
                        <li >Metarial - Rubber body</li>
                        <li>Size - 7inch</li>
                        <li>Assable - vietnam</li>
                    </ul>
                    <div className="flex lg:mt-10 mt-5 justify-between items-center pr-12">
                        <p className="text font-semibold text-2xl text-[#613d26]">
                            {data?.data.price}-TK
                        </p>
                        <Rating style={{ maxWidth: 110 }} value={data?.data.rating} />
                    </div>

                    <div className="divider"></div>
                    <CartButtons data={data} />
                </div>
            </div>

        </section>
    );
};

export default ShowSinglePro;