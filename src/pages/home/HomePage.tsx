import About from "../../components/about/About";
import Advice from "../../components/Advice/Advice";
import BestSellingPro from "../../components/bestSelling/BestSellingPro";
import Category from "../../components/category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/header/Header";

 
const HomePage = () => {
    return (
        <div>
            <Header />
            <Category />
            <Advice />
            <BestSellingPro />
            <About/>
            <Footer/>
        </div>
    );
};

export default HomePage;