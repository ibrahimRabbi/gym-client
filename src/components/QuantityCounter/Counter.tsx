import { useState } from "react";

 

const Counter = () => {

    const [qnty, setQnty] = useState(1)


    const incrimentHandler = () => {
        setQnty(v => {
            if (v >= 10) {
                return v = 10
            }
            return v + 1
        })
    }

    const dicrimentHandler = () => {
        setQnty(v => {
            if (v < 2) {
                return v = 1
            }
            return v - 1
        })
    }
    return (
        <div className='flex justify-between border border-[#e2ac8a] items-center px-2 bg-white gap-5 rounded-md'>
            <button onClick={dicrimentHandler} className='p-2 text-lg font-bold'>-</button>
            <p className='px-1'>{qnty}</p>
            <button onClick={incrimentHandler} className='p-2 text-lg font-bold' >+</button>
        </div>
    );
};

export default Counter;