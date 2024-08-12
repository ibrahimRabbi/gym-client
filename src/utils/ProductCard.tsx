import { Card } from "antd";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

 

const ProductCard = ({data}:any) => {
     
    const {image,title,price,rating} = data
     
    return (
        <Card
            hoverable
            style={{ width: 240, height:420 }}
            cover={<img className="hover:scale-110 duration-100" alt="product" src={image} />}
        >
            <div className="text-center p-0 mt-8">
                <Rating style={{width:'100px',margin:'auto'}} value={rating} />
                <p className="text-sm font-semibold mt-2">{title}</p>
                <p className="mt-2 text-xl font-bold">{price}-TK</p>
                <p className="mt-1 text-sm text-gray-600">2 color available</p>
             </div>
        </Card>
    );
};

export default ProductCard;