import { useLoaderData } from "react-router-dom";
import CraftSingleCard from "../CraftSingleCard/CraftSingleCard";




const CraftCards = () => {

        const crafts = useLoaderData();
        const sixCrafts = crafts.slice(0, 6);
    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="flex justify-center items-center">
                <h2 className="text-4xl text-cenetr font-semibold">Crafts Cards: {crafts.length}</h2>
            </div>
            <div className=" grid  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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