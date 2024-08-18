// import  { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
// import Swal from 'sweetalert2';
// import SigninProvider from './SigninProvider';
// import Loader from '../UI/Loader';

const Signin = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const location = useLocation()
    const redirectTo = location.state?.redi || '/'
    // const navigate = useNavigate()
    // const [error, setError] = useState('')
    // const [loading, setloading] = useState(false)


    const login = (data:object) => {
        console.log(data)
    }


    
    return (

        <div className="hero mt-10 bg-white">

            <div className="hero-content gap-20">
                <img className='hidden lg:inline-block' width={500} src="https://i.ibb.co/yN0CJZ3/experimental-3d-morphis-bank-account-management-using-a-cell-phone.png" />

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">

                    <form onSubmit={handleSubmit(login)} className="card-body">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-zinc-950">email</span>
                            </label>
                            <input className="border bg-transparent border-zinc-900 rounded-2xl p-2" placeholder="email" {...register('email', { required: true })} />
                            {errors.email && <p className="text-red-500">email ius requird</p>}
                        </div>

                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text text-zinc-950">password</span>
                            </label>
                            <input className="border bg-transparent border-zinc-900 rounded-2xl p-2" placeholder="password" {...register('password', { required: true,minLength:8 })} />
                            {errors.password?.type === 'required' && <p className="text-red-500">password is requird</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-500">password must be 8 character</p>}
                        </div>

                        <div className="form-control w-full  ">
                            <label className="label">
                                <span className="label-text text-zinc-950">confirm-password</span>
                            </label>
                            <input className="border bg-transparent border-zinc-900 rounded-2xl p-2" placeholder="confirm-password" {...register('confirm', { required: true,minLength:8 })} />
                            {errors.confirm?.type === 'minLength' && <p className="text-red-500">password must be 8 character</p>}
                            {errors.confirm?.type === 'required' && <p className="text-red-500">confirm password is required</p>}
                        </div>
                        <p className='text-red-600 font-semibold'>error</p>
                        <button type='submit' className='bg-zinc-900 mt-2 uppercase btn shadow-md shadow-zinc-700   border-0 font-semibold text-white hover:bg-zinc-950'>Sign in</button>

                        <p className="font-semibold  text-sm text-zinc-950 text-center mt-5">dont Have an Account? <Link to='/sign-up' className="text-red-600 font-bold">Sign Up</Link> insted</p>
                        <div className="divider">OR</div>
                        <div>

                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Signin;