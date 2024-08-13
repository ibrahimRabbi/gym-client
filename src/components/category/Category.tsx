import { Image } from "antd";
import Title from "../../utils/Title";
import { Link } from "react-router-dom";



const Category = () => {


    const categories = [
        { name: 'Treadmiler', src: 'https://i.ibb.co/Y7sH5sN/trademiller-c.webp' },
        { name: 'exercise Cycle', src: 'https://i.ibb.co/r03rV8g/9fa80c5440f21669058b871b6826e43e.jpg' },
        { name: 'Cable Machine', src: 'https://i.ibb.co/x1sJYhx/f07e6797a5b245efb5b5291a516efefa.jpg' },
        { name: 'Dumbbell', src: 'https://i.ibb.co/zrYtZWb/e2ecf0f3-f0ae-44ac-9e21-501fb205e012.jpg' },
        { name: 'Bench', src: 'https://i.ibb.co/0D9BhCw/Fit-Fab-Situp-Bench-Pro-Adjustable-Curved-Sit-Up-Bench-Crunch-Board-Ab-Bench-Slant-Board-Review-Hot.jpg' },
        { name: 'Barbell', src: 'https://i.ibb.co/L5MQLZ8/NEW-Individual-Cast-Iron-Weight-Plates-Olympic-Weights-Oldschool-45lb-Pair.jpg' },
        { name: 'Rowing Machine', src: 'https://i.ibb.co/DpG0jFJ/The-Brilliant-Vision-of-Patricia-Walsh.jpg' },
        { name: 'Leg Extension', src: 'https://i.ibb.co/7gCm9Kk/Body-Solid-DLEC-SF-Pro-Dual-Leg-Extension-Curl-Machine-Fitness-Superstore.jpg' },
        { name: 'Gym Mat', src: 'https://i.ibb.co/wgR6SHJ/Premium-6mm-Print-Extra-Thick-Non-Slip-Exercise-Fitness-Mat-Yoga-Gym-Mat.jpg' },
        { name: 'Suppliment', src: 'https://i.ibb.co/DbPgGB1/why.jpg' },

    ]

    
    return (
        <div className="mt-20 w-[95%] mx-auto ">
            <Title title='Shop by Category' />
            <div className=" mt-7 grid grid-cols-5 gap-x-8 gap-y-14">
                {
                    categories.map(v => {
                        return <Link to='/all-products' className="hover:rotate-3 duration-100 cursor-pointer">
                            <Image className="rounded-2xl " preview={false} width={220} src={v.src} />
                            <p className="text-2xl font-[Caveat] text-slate-300 ">{v.name}</p>
                        </Link>
                    })
                }
            </div>
            


        </div>
    );
};

export default Category;