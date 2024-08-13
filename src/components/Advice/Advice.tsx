import { Button, Image } from "antd";

 

const Advice = () => {
    return (
        <div className="flex justify-center space-x-14 items-center mt-28 w-[80%] mx-auto">
            
            <Image className="rounded-2xl " preview={false} width={350}   src="https://i.ibb.co/hZ6sRSn/0df07d88b06f016bbbdc191ac8237f9d.jpg"/>
            <div className="w-[40%]">
                <p className="text-3xl font-bold uppercase text-slate-300 font-[Caveat] ">WE recommend you the best way to Gym at home</p>
                <p className="mt-3 text-base text-justify text-slate-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit illum similique, ex ratione dolor recusandae officiis, consequatur error, veritatis nostrum quasi reiciendis assumenda mollitia eaque. Fugiat, accusantium. Rem reiciendis, magnam odio voluptates odit et? Quia asperiores quisquam possimus saepe obcaecati voluptatibus, ipsa deleniti eum ad, sunt, maiores impedit ipsum. Non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eligendi soluta cupiditate dolorem pariatur nobis corporis commodi harum a, voluptate quam? Facere magni assumenda incidunt tenetur dolore consectetur officia esse excepturi doloremque nulla perferendis maxime 
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-sm font-medium">How to use cable Machine</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-sm font-medium">how to exercise the right way in the home</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-arrow">
                        <div className="collapse-title text-sm font-medium">routine to take a suppliment</div>
                        <div className="collapse-content">
                            <p>tabindex={0} attribute is necessary to make the div focusable</p>
                        </div>
                    </div>
                    </p>
                <Button className=" bg-yellow-500 border-none p-4 font-semibold mt-5">Read More..</Button>
            </div>
        </div>
    );
};

export default Advice;