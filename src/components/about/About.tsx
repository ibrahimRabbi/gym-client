 import Title from '../../utils/Title';
import './aboute.css'

const About = () => {
    return (
        <section id='about' className=''>
            <div className="about bg-fixed flex justify-center items-center h-[450px] w-[80%] mx-auto mb-10 rounded-lg">
                <div className='bg-white w-1/2 rounded-lg text-center p-6'>
                    <div className="avatar">
                        <div className="w-20 rounded-full">
                            <img src="https://i.ibb.co/z5QXvMS/2148859448.jpg" />
                        </div>
                    </div>
                    <div>
                        <p className='text-lg font-bold'>Hi.! <span className='text-sm'>Im jhon Smith</span></p>
                        <p className='font-bold text-[12px] text-zinc-600'>Chairman</p>
                        <p className='text-justify text-sm font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde voluptates in modi culpa alias, aliquid sapiente dolorem porro. Itaque, blanditiis aliquam vitae error accusamus deleniti tempora fugiat illum rerum. Blanditiis culpa dicta voluptatum et adipisci, dolorum fuga excepturi quis qui?</p>
                    </div>
                </div>
            </div>
            <div className='w-[90%] mx-auto text-slate-400 mb-20'>
                <Title title='About Us' />
                <p className='mt-4'>We are honorable Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui saepe placeat consequuntur neque vel quas, id quaerat, mollitia dolore exercitationem ipsam suscipit. Vero reprehenderit nihil tempore rerum laudantium harum voluptate, ipsum fuga quasi ducimus dolorem esse excepturi, id at ab Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa at, molestiae maxime facere, earum nesciunt doloribus sit nemo maiores illo excepturi ipsam officia officiis, enim inventore ut est facilis voluptatibus Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ea sed nam sunt quae dolorum similique eum nesciunt magni delectus. Libero rem error assumenda velit dolorem doloremque earum provident minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis doloribus quisquam laudantium nostrum architecto perspiciatis sit, veniam voluptatibus nam ex ut reiciendis earum, placeat nihil similique? Earum, dicta numquam sunt reprehenderit nemo blanditiis officia possimus, vel harum at, eos alias.</p>
            </div>
        </section>
        
    );
};

export default About;