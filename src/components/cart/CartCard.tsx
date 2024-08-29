import { FaTrashAlt } from "react-icons/fa";
import { useDeleteCartMutation } from "../../redux/api/baseApi";
import { toast } from "react-toastify";

 

const CartCard = ({data}:any) => {

    const { quentity, productId,_id } = data
    const { price, title, image } = productId
    const [deleteCart] = useDeleteCartMutation()
 


    const handler = async (id:string) => {
        const respond = await deleteCart(id).unwrap()
        if (respond.data) {
            toast('cart data has been deleted')
        }
    }
     

    
    return (
        <section>
            <div className="flex items-start gap-6 border p-4 rounded-lg shadow-md">
                <div className="avatar">
                    <div className="w-32 rounded-xl">
                        <img src={image} alt="" />
                    </div>
                </div>

                <div>
                    <h1 className="text-xl text font-semibold">{title}</h1>
                    <div className="flex items-center gap-10 text-zinc-900 text-sm mt-1 font-semibold">
                        <p>Size: -inch</p>
                        <p>Quantity: {quentity} </p>
                    </div>
                    <div className="flex items-center gap-11 mt-5">
                        <p className=" font-semibold mt-2">Price :{price} -TK</p>
                        <button onClick={() => handler(_id)}>
                            <FaTrashAlt className="text-red-600 text-xl mt-2" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartCard;