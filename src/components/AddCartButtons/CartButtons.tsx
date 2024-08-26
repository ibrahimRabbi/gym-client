import { toast } from "react-toastify";
import { useAddCartMutation, useGetUserQuery } from "../../redux/api/baseApi";
import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const CartButtons = ({ data }: any) => {

    const quentity = useAppSelector(state => state.orderData.quentity)
    const [addData] = useAddCartMutation()
    const { data: user } = useGetUserQuery(undefined)
    const navigate = useNavigate()

      

    const addToCartHandler = async () => {
   
        if (user.error) {
            navigate('/sign-in')
        }

        const cartData = {
            quentity,
            productId: data?.data?._id,
            userEmail: user?.data?.email
        }
        const respond = await addData(cartData).unwrap()
        
        if (respond.error) {
           return toast('this item already added')
        } else {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "item added successfully",
                showConfirmButton: false,
                timer: 2000
            });
            navigate('/all-products')
        }
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