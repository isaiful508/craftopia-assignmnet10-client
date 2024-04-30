
import { useEffect, useState } from "react";

import Cards from './Cards';



const SubCategory = () => {
    // const categoryLoader = useLoaderData();
    // console.log(categoryLoader);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://craftopia-server-assignment10.vercel.app/subCategory")
            .then(res => res.json())
            .then(data => {
                setItems(data)
            })
    }, [])

    

    console.log(items);



    return (
        <div className="container mx-auto mt-8 mb-8">

            <div>
                <h2 className="text-4xl text-center sora-600 mt-4 mb-6">View By Sub Catyegory</h2>
            </div>

            <div className="grid border-2 border-[#d4a37b] rounded-lg p-4  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">



                {
                    items.map(item => <Cards item={item} key={item._id}>

                    </Cards>
                       
                    )
                }
            </div>

        </div>
    );
};

export default SubCategory;