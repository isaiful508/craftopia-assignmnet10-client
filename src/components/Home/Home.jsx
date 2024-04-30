import Banner from "./Banner/Banner";
import CraftCards from "./CraftCards/CraftCards";
import Events from "./Events/Events";
import NewsLetter from "./NewsLetter/NewsLetter";
import SubCategory from "./SubCategory/SubCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CraftCards></CraftCards>
            <SubCategory></SubCategory>
            <Events></Events>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;