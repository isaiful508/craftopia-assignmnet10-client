import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";



const SubCategory = () => {
    // const categoryLoader = useLoaderData();
    // console.log(categoryLoader);


    useEffect(() =>{
        fetch("http://localhost:5000/subCategory")
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    })




    return (
        <div className="container mx-auto mt-8 mb-8">

            <div className="grid border-2 border-[#d4a37b] rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                <Link to="/categoryCards">
                <button className="btn">Category</button>
                </Link>
{/* 
                {
                    categoryLoader.map(item =>
                        <div
                            key={item._id}
                            className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.itemName}</h2>
                                <h2 className="card-title">{item.SubCategory}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                } */}
            </div>

        </div>
    );
};

export default SubCategory;