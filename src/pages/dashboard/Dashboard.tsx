
import { Link, Outlet } from 'react-router-dom';
import Logo from '../../utils/Logo';

const Dashboard = () => {
    return (
        <section className='bg-white'>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    
                    <ul className="menu w-80 min-h-full bg-base-200 text-zinc-950">
                        <div className='w-full mx-auto py-3 text-center'><Link to='/'><Logo /></Link></div>
                        <div className='mt-5'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='orders'>Orders</Link></li>
                            <li><Link to='addproduct'>Add Product</Link></li>
                            <li><Link to='/manage-product'>Manage Product</Link></li>
                            <li><Link to='manage'>Inventory</Link></li>
                        </div>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;