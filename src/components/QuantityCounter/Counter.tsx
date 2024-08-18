import { dicremntqnty, incremntqnty } from "../../redux/features/productSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";





const Counter = () => {

    const dispatch = useAppDispatch()
    const quentity = useAppSelector(state => state.orderData.quentity)

    const decrimentHanler = () => {
        dispatch(dicremntqnty())
    }

    const incrementHanler = () => {
        dispatch(incremntqnty())
    }


    return (
        <div className='flex justify-between border border-[#e2ac8a] items-center px-2 bg-white gap-5 rounded-md'>
            <button onClick={decrimentHanler} className='p-2 text-lg font-bold'>-</button>
            <p className='px-1'>{quentity}</p>
            <button onClick={incrementHanler} className='p-2 text-lg font-bold' >+</button>
        </div>
    );
};

export default Counter;