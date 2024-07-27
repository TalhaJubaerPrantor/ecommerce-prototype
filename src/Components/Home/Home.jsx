// import Carousel from "./Carousel/Carousel";
import Trending from "./Trending/Products";
import Collections from "./Collections/Collections";
import Offers from "./Offers/Offers";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'



const Home = () => {
    return (
        <div>
            {/* <Carousel/><br /><br /> */}
            <Navbar/>
            <Offers/>
            <Trending/>
            <Collections/>
            <Footer/>
                
        </div>
    );
};

export default Home;