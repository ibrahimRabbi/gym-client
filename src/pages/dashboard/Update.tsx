 
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useUpdateProductMutation } from '../../redux/api/baseApi';
import { toast } from 'react-toastify';
 

const UpdateProduct = () => {
    const { state } = useLocation()
    const { id } = useParams()
    const navigate = useNavigate()
    const { register,  handleSubmit, formState: { errors } } = useForm();
    const category = ['bike', 'cable-machine', 'dumbbell', 'treadmill'].sort()
    const [update,{isLoading}] = useUpdateProductMutation()
    



    const submitHandler = async (data:any) => {
 
        const responde = await update({data, id}).unwrap()
        if (responde.error) {
           toast('somthing went wrong try again')
        } else {
            
            navigate('/dashboard/manage-product')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'product add successfull',
                showConfirmButton: false,
                timer: 1500
            })
       }
       
         
    }



    if (isLoading) {
        return <h1>Loading...</h1>
    }


      



    return (
        <section className=''>
            <form onSubmit={handleSubmit(submitHandler)} className='w-[80%] backDrp rounded-xl mx-auto p-10'>

                <div className="form-control w-full">
                    <label className="label">Title/Name *</label>
                    <input type="text"
                        defaultValue={state.title}
                        className="border border-zinc-950 rounded-2xl p-2" placeholder='Type Here'
                        {...register('title', { required: true })} />
                    {errors.name && <p className="text-red-500">title is requird</p>}
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">Available Stock*</label>
                        <input type="number"
                            defaultValue={state.stock}
                            className="border border-zinc-950 rounded-2xl p-2" placeholder='Type Here'
                            {...register('stock', { required: true })} />
                        {errors.available && <p className="text-red-500">Available Stock is requird</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Price *</label>
                        <input type="number"
                            defaultValue={state.price}
                            className="border border-zinc-950 rounded-2xl p-2" placeholder='EX:400'
                            {...register('price', { required: true, min: 10 })} />
                        {errors.price?.type === 'required' && <p className="text-red-500">price is requird</p>}
                        {errors.price?.type === 'min' && <p className="text-red-500">price must have above an 10 tk</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">Category *</label>
                        <select defaultValue={state.category} {...register('category')} className="select border-zinc-950 select-bordered">
                            {category.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Main image URL*</span></label>
                        <input type="text"
                            defaultValue={state.image}
                            className="border border-zinc-950 rounded-2xl p-2" placeholder='URL '
                            {...register('image')} />
                    </div>


                </div>


                <div className="form-control w-full">
                    <label className="label">Description*</label>
                    <textarea 
                        defaultValue={state.description}
                        className="border border-zinc-950 rounded-2xl p-2" placeholder='Type Here'
                        {...register('description', { required: true })} />
                    {errors.title && <p className="text-red-500">description is requird</p>}
                </div>



                <input className="bg-gradient-to-l font-semibold from-red-500 to-amber-500 mt-10 hover:bg-amber-600 p-2 w-full rounded-lg" type="submit" />

            </form>


        </section>
    );
};

export default UpdateProduct;