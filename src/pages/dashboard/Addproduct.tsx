 
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useAddProductMutation } from '../../redux/api/baseApi';
import { toast } from 'react-toastify';
 

export type Tproduct = {
    _id?: string,
    title: string,
    description: string,
    price: number,
    image: string,
    category: 'bike' | 'cable-machine' | 'dumbbell' | 'treadmill' | 'bench' | "barbell"
    stock: number
}




const AddProduct = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const category = ['bike', 'cable-machine', 'dumbbell', 'treadmill', 'bench','barbell'].sort()
    const [addproduct,{isLoading}] = useAddProductMutation()
     
     
    
   


    const submitHandler = async (data:any) => {

       

        const formData = new FormData()
       formData.append('image', data.image[0])



        fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then( async (res) => {
                if (res.data?.url) {
                    const image = res.data.url  
                    const responose = await addproduct({ ...data, image }).unwrap()

                    if (responose.error) {
                        toast(responose.message)
                    }
                    if (responose.data) {
                        reset()
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                     }
                }
            })
        
        
        
    }

    if (isLoading) {
        return <h1>loading..</h1>
    }


    return (
        <section className='mt-8'>
            <form onSubmit={handleSubmit(submitHandler)}   className='w-[80%] backDrp rounded-xl mx-auto'>

                <div className="form-control w-full">
                    <label className="label">Product Title *</label>
                    <input type="text"
                        className="border border-zinc-900 rounded-2xl p-2" placeholder='Type Here'
                        {...register('title', { required: true })} />
                    {errors.title?.type === 'required' && <p className="text-red-500">title is requird</p>}
                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className="form-control w-full">
                        <label className="label">Price *</label>
                        <input type="number"
                            className="border border-zinc-900 rounded-2xl p-2" placeholder='EX:400'
                            {...register('price', { required: true, min: 10 })} />
                        {errors.price?.type === 'required' && <p className="text-red-500">price is requird</p>}
                        {errors.price?.type === 'min' && <p className="text-red-500">price must have above an 10 tk</p>}
                    </div>

                    <div className="form-control w-full">
                        <label className="label">Category *</label>
                        <select {...register('category')} className="select rounded-3xl border-zinc-900 select-bordered">
                            {category.map(v => <option key={Math.random()}>{v}</option>)}
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">Toy Image *</label>
                        <input type="file" className="file-input file-input-bordered  w-full" {...register('image', { required: true })}
                        />
                        {errors.image && <p className="text-red-500">your image is requird</p>}
                    </div>


                    <div className="form-control w-full">
                        <label className="label">Quantity*</label>
                        <input type="number"
                            className="border bg-none border-zinc-900 rounded-2xl p-2" placeholder='Type Here'
                            {...register('stock', { required: true, min: 20 })} />
                        {errors.stock?.type === 'required' && <p className="text-red-500">stock is requird</p>}
                        {errors.stock?.type === 'min' && <p className="text-red-500">stock add minimum 20 pices</p>}
                    </div>


                </div>

                <div className="form-control w-full">
                    <label className="label">Description*</label>
                    <textarea  
                        className="border border-zinc-900 rounded-2xl p-2 bg-none" placeholder='Type Here'
                        {...register('description', { required: true })} />
                    {errors.description && <p className="text-red-500">description is requird</p>}
                </div>



                <input className=" font-semibold bg-zinc-900 mt-10 text-white hover:bg-zinc-950 p-2 w-full rounded-lg" type="submit" />

            </form>


        </section>
    );
};

export default AddProduct;


 