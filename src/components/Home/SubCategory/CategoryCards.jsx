import {  useLoaderData, useParams } from "react-router-dom";
import Cards from "./Cards";


const CategoryCards = () => {

const loader = useLoaderData();

const {subCategory} = useParams();
// console.log(subCategory);
// console.log(loader);

    return (
        <div className="grid border-2 border-[#d4a37b] rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                loader.map(item => <Cards 
                    item={item}
                    key={item._id}
                
                ></Cards>)
            }
        </div>
    );
};

export default CategoryCards;