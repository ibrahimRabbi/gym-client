 import { Link } from 'react-router-dom';
 




const Calculate = ({ data }: any) => {
      
    let quantitiy = 0
    let amount = 0  
    let discount = 10;
    let subTotal = 0
     
  
    data.forEach((v:any) => {
        quantitiy = quantitiy + v.quentity
        amount = amount + (v.id.price * v.quentity) 
    });
 
    if (amount>0) {
    subTotal = amount - discount
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
                <Link  to='/payment' state={{subTotal,items:data}} className='bg-zinc-950 mt-16 block   p-2 text-center font-semibold text-white text-sm rounded-lg w-full'>proceed to Checkout</Link>
            </div>
        </div>



    );
};

export default Calculate;