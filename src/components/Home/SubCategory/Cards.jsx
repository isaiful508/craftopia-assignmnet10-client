import { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";


const Cards = ({ item }) => {
const [cat, setCat] = useState("")
const navigate = useNavigate();

    const { itemName, SubCategory, shortDescription, price, stockStatus, photoURL } = item;
    
   useEffect(() =>{
    if (SubCategory) {
        const subCategory = SubCategory.split(" ");
        const joinedSubCategory = subCategory.join("_");
        console.log(joinedSubCategory);
        setCat(joinedSubCategory);
    } else {
        console.log("SubCategory is undefined or empty.");

    }
   },[])
// console.log(cat);

    return (
        <div

            className="card w-96 bg-base-100 shadow-xl container mx-auto">
            <figure><img src={photoURL} alt="Category" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item.itemName}</h2>
                <h2 className="card-title">Sub Category:  {item.SubCategory}</h2>
                <p className="sora-500">{item.shortDescription}</p>
                <p className="sora-500">${item.price}</p>
                <p className="sora-500">Status: {item.stockStatus}</p>
                


                <div className="card-actions justify-end">

                   
                        <button onClick={() => navigate(`/categoryCards/${cat}`)} className="btn text-white bg-gradient-to-r from-[#d4a37b] to-[#FFB400]">View</button>
                    

                </div>
            </div>
        </div>
    );
};

export default Cards;