import { Button } from 'antd';
import Navber from '../navbar/Navber';
import './header.css'
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { FormEvent } from 'react';
import { useGetProductQuery } from '../../redux/api/baseApi';
import { useNavigate } from 'react-router-dom';
import { setClick } from '../../redux/features/clickSlice';
 

const Header = () => {

    const click = useAppSelector(state => state.click.click)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    
    const searchHandler = (e:FormEvent) => {
        e.preventDefault()
        navigate('/products',{state:e.target?.search.value})
         dispatch(setClick(false))
    }
    


    return (
        <header>
            <Navber/>
            
            <form onSubmit={searchHandler}  className={`w-1/2 mx-auto flex gap-2 ${click ? 'block' : 'hidden'}`} action="">
                <input type="search" placeholder='Search Product' name="search" id="" className={`w-full  z-10 rounded-md p-3 flex justify-center mx-auto duration-150  outline-none`} />
                <input type="submit" value="submit" className='bg-yellow-500 btn border-none' />
               </form>
               
             
            <div className='border px-2 py-7 rounded-md w-1/2 mx-auto text-center mt-32'>
                <p className='font-bold text-white text-4xl'>Exclusive</p>
                <h2 className='text-white font-bold text-6xl mt-4'>get <span className='text-yellow-500 animate-bounce'>10%</span> off now</h2>
                <p className='mt-4 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente accusamus eos quaerat quisquam consequuntur vitae exercitationem asperiores, alias omnis laboriosam?</p>
                <div className='space-x-5 mt-5'>
                    <Button type='primary' className='bg-yellow-500 p-5 border-none'>Shop Now</Button>
                    <Button type='primary' className='border-none p-5'>Guidelines</Button>
                </div>
             </div>
         </header>
    );
};

export default Header;