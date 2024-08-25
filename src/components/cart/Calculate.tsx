import { useNavigate } from "react-router-dom";
import { usePaymentMutation } from "../../redux/api/baseApi";

  


const Calculate = ({ data }: any) => {
      
    let quantitiy = 0
    let amount = 0  
    let discount = 10;
    let subTotal = 0
    const [payment] = usePaymentMutation()
    const navigate = useNavigate()
     
  
    data.forEach((v:any) => {
        quantitiy = quantitiy + v.quentity
        amount = amount + (v.productId.price * v.quentity) 
    });
 

    if (amount>0) {
    subTotal = amount - discount
    }

    
    const paymentHandler = async () => {
        const response = await payment({ amount: subTotal, currency: 'BDT' }).unwrap()
         window.location.assign(response.url)
    }
     
    return (
        <div className='border rounded-lg h-96 lg:sticky p-5 top-7'>
            <h1 className='text-center font-semibold'>Shopping Summery</h1>
            <div className='mt-5 text-zinc-950 text-sm'>
                <h1 className="  mt-2">Quantitiy : {quantitiy}</h1>
                <h1 className="  mt-2">Total Amount : {amount}-TK</h1>
                <h1 className="   mt-2">Total Vat : 00-TK</h1>
                <h1 className=" mt-2">Discount : {discount}-TK</h1>
                <div className="divider"></div>
                <h1 className="text-xl text-gray-900 font-semibold rounded-lg mt-2">Sub Total : {subTotal}-TK</h1>
                <button onClick={paymentHandler} className='bg-zinc-950 mt-16 block   p-2 text-center font-semibold text-white text-sm rounded-md   w-full'>proceed to Checkout</button>
            </div>
        </div>



    );
};

export default Calculate;