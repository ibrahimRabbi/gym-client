
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { useDeleteProductMutation, useGetProductQuery } from '../../redux/api/baseApi';
import { RxCross2 } from 'react-icons/rx'
import { Tproduct } from './Addproduct';
import { toast } from 'react-toastify';
 
 



const ManangeProduct = () => {

    const { data,isLoading } = useGetProductQuery({})
    const [deleteProduct] = useDeleteProductMutation()
    
    
    const deleteHandler = (id:string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteProduct(id).unwrap()
                if (response.data) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'your toy has been deleted successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if (response.error) {
                    toast(response.error)
                }
               
            }
        })

    }


    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return (
        <section>
            <div className='w-[90%] mt-16 mx-auto'>
                <div className="overflow-x-auto backDrp">
                    <table className="table">
                        {/* head */}
                        <thead className='bg-gradient-to-r from-amber-500 to-red-500 uppercase text-zinc-950'>
                            <tr>
                                <th>SR.NO</th>
                                <th>Image</th>
                                <th>title</th>
                                <th>AV.Stock</th>
                                <th>price</th>
                                <th>remove</th>
                                <th>update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data?.data.map((v:Tproduct, index:number) => {
                                return (
                                    <tr key={v._id}>
                                        <td>{index + 1}</td>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={v.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </td>
                                        <th>{v.title}</th>
                                        <td>{v.stock}</td>
                                        <td>{v.price}-TK</td>
                                        <td><button onClick={() => deleteHandler(v._id)} className=' p-3 ring-1 ring-red-500 bg-transparent rounded-full hover:bg-red-600 hover:text-white'><RxCross2 className='text-xl' /></button></td>
                                        <td>
                                            <Link to={`/dashboard/update/${v._id}`} state={v} className="p-2 rounded-lg text-zinc-950 bg-amber-500">update</Link>
                                        </td>
                                    </tr>

                                )
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManangeProduct;