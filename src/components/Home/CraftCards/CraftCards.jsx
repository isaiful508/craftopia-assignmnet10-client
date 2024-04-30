import { useLoaderData } from "react-router-dom";
import CraftSingleCard from "../CraftSingleCard/CraftSingleCard";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'



const CraftCards = () => {

        const crafts = useLoaderData();
        const sixCrafts = crafts.slice(0, 6);
        const [typeEffect] = useTypewriter({
            words:['Discover the Magic of Art and Crafts'],
            loop:{},
            typeSpeed:100,
            deleteSpeed: 40
        })




    return (
        <div className="container lg:w-full md:w-full w-96 mx-auto mt-10 mb-10">
            <div className="text-center mb-6 ml-8 p-4 lg:p-4">
                <h2 className="text-4xl  sora-600">{typeEffect}</h2>
                <p className="sora-500 mt-2 ">Art cards are tiny masterpieces, showcasing creativity and beauty in a compact format, perfect for sharing and collecting.</p>
            </div>
            <div className=" grid border-2 border-[#d4a37b] rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    
                    sixCrafts.map(craft => <CraftSingleCard
                  key={craft._id}
                  craft={craft}
                  ></CraftSingleCard>)  
                }
            </div>
        </div>
    );
};

export default CraftCards;