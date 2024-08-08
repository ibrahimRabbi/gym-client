import { Button } from 'antd';
import Navber from '../navbar/Navber';
import './header.css'

const Header = () => {
    return (
        <header>
            <Navber/>
            <div className='border px-2 py-7 rounded-md w-1/2 mx-auto text-center mt-32'>
                <p className='text-yellow-500 font-bold text-4xl'>Exclusive</p>
                <h2 className='text-white font-bold text-6xl mt-4'>get 10% off now</h2>
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