import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate} from "react-router-dom";
 
import { useCreateUserMutation } from "../../redux/api/baseApi";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
 
 
 






const SignUp = () => {


    const { handleSubmit, register, formState: { errors } } = useForm()
     const navigate = useNavigate()
    const [error, setError] = useState('')
    const [createuser] = useCreateUserMutation()
    
    
     
    



    const submit = async (data: Record<string, unknown>) => {
        
        if (data.password !== data.confirm) {
            setError('confirm password did not match')
        } else {
            setError('')
            const finalData = {
                name: data.name,
                email: data.email,
                password:data.password
            }
            const response = await createuser(finalData).unwrap()
            const error = response.message

            if (error?.includes('duplicate key error collection')) {
                toast('this user Already exist')
            }
            
            if (response?.token) {
                localStorage.setItem('accessToken',response.token)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "signup successfull",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            }
        }

        
        
    }


    // if (load) {
    //     return <Loader />
    // }


    return (
        <section className="bg-white">

            <div className="w-[50%] bg-slate-50 border mt-10 mx-auto rounded-lg lg:p-5">
                <div className="w-1/2 mx-auto" >
                    <h1 className="text-3xl font-semibold text-center">Sign up</h1>
                    <hr className="mt-4 w-80 mx-auto border-[#613d26]" />
                </div>
                <form className="space-y-3  mt-5 mx-auto" onSubmit={handleSubmit(submit)}>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Enter your full name*</span></label>
                        <input
                            className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='Ex : MD Sihab Hossain'
                            {...register('name', { required: true })} />
                        {errors.name && <p className="text-red-500">name is requird</p>}
                    </div>
                    <div className=" flex flex-col lg:grid grid-cols-2 gap-5">
                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">Enter Email*</span></label>
                            <input type="email"
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='Ex : abc@gmail.com'
                                {...register('email', { required: true })} />
                            {errors.email && <p className="text-red-600">email is requird</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">your Image*</span></label>
                            <input type="file" className="file-input   border-[#613d26] file-input-bordered w-full max-w-xs" {...register('profile')}
                            />
                             
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">type new password*</span></label>
                            <input
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='password'
                                {...register('password', {
                                    required: true,
                                    pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])/,
                                    minLength: 8
                                })} />
                            {errors.password?.type === 'required' && <p className="text-red-600">password is requird</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">password minimum 6 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">password must have a uppercase and number</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"><span className="label-text">confirm password*</span></label>
                            <input
                                className="border bg-transparent border-[#613d26] rounded-2xl p-2" placeholder='confirm password'
                                {...register('confirm', { required: true })} />
                            {errors.confirm && <p className="text-red-600">confirm password is requird</p>}
                        </div>
                    </div>

                    <p className="text-red-600 pt-2">{error}</p>

                    <button className=' mt-2 uppercase w-full bg-zinc-900 btn   border-0 font-semibold text-white hover:bg-zinc-950' type="submit">Sign up</button>

                </form>

                <p className="font-semibold text-sm text-center text-zinc-950 pt-7">Already Have an Account? <Link to='/sign-in' className="text-red-600 font-bold">Sign In</Link> insted</p>
                <div className="divider">OR</div>
                <div>
                    
                </div>
            </div>


        </section>
    );
};

export default SignUp;


