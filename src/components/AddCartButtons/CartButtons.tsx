import { toast } from "react-toastify";
import { useAddCartMutation } from "../../redux/api/baseApi";
import { useAppSelector } from "../../redux/hook";



const CartButtons = ({ data }: any) => {

    const quentity = useAppSelector(state => state.orderData.quentity)
    const [addData, { data: resposnose}] = useAddCartMutation()


    if (resposnose?.message === 'Error: this item already added') {
        toast('this item already added in the cart')
    }
     

    const addToCartHandler = () => {
   
        const cartData = {
            quentity,
            id: data.data._id
        }
        addData(cartData)
    }

    const buyNowHandler = () => {

    }



    return (
        <div className="flex gap-8 lg:mt-12 mt-5 items-center">
            <button onClick={addToCartHandler} className={`p-2 btn ${data?.stock == 0 ? 'btn-disabled' : 'visible'} hover:bg-zinc-900 rounded-lg text-white font-semibold bg-zinc-950 w-[45%]`}>Add To Cart</button>
            <button onClick={buyNowHandler} className={`p-2 btn ${data?.stock == 0 ? 'btn-disabled' : 'visible'} hover:bg-amber-500 rounded-lg font-semibold bg-amber-400 text-slate-900 w-[45%]`}>
                Buy Now
            </button>
        </div>
    );
};

export default CartButtons;