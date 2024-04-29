import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const { id } = useParams();
    console.log("id", id);

    const [craft, setCraft] = useState({});

    useEffect(() => {
        fetch(`https://craftopia-server-assignment10.vercel.app/update/${id}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data);
                console.log(data);
            })
    }, [id])


    const handleUpdate = e => {
        e.preventDefault();

        const form = e.target;

        const itemName = form.item_name.value;
        const SubCategory = form.sub_category.value;
        const shortDescription = form.short_description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const processingTime = form.processing_time.value;
        const stockStatus = form.stock_status.value;

        const newUpdatedCraft = { itemName, SubCategory, shortDescription, price, rating, customization, processingTime, stockStatus };

        console.log(newUpdatedCraft);


        fetch(`https://craftopia-server-assignment10.vercel.app/updateCraft/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdatedCraft)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Craft Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'X'
                    })

                    form.reset()

                }
            })
    }



    return (
        <div className="container md:w-3/4 lg:1/2 mx-auto   p-6 dark:bg-gray-100 dark:text-gray-900">

            <form onSubmit={handleUpdate} className=" flex flex-col space-y-12">




                <div className=" gap-4">

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Item Name</label>

                            <input type="text" defaultValue={craft.itemName} name="item_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>


                        <div className="col-span-full w-1/2 sm:col-span-3">

                            <label className="text-sm">Subcategory Name</label>

                            <select className="w-full input input-bordered" name="sub_category" defaultValue={craft.SubCategory}>
                                <option value="Landscape Painting">Landscape Painting</option>
                                <option value="Portrait Drawing">Portrait Drawing</option>
                                <option value="Watercolour Painting">Watercolour Painting</option>
                                <option value="Oil Painting">Oil Painting</option>
                                <option value="Charcoal Sketching">Charcoal Sketching</option>
                                <option value="Cartoon Drawing">Cartoon Drawing</option>
                            </select>

                        </div>

                    </div>



                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Short Description</label>

                            <input name="short_description" defaultValue={craft.shortDescription} type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Price</label>

                            <input name="price" defaultValue={craft.price} type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Rating</label>

                            <input type="text" defaultValue={craft.rating} name="rating" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Customization</label>

                            <select className="w-full input input-bordered" name="customization" defaultValue={craft.customization}>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>

                            </select>

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label htmlFor="email" className="text-sm">Processing Time</label>

                            <input name="processing_time" defaultValue={craft.processingTime} type="text" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Stock Status</label>

                            <select className="w-full input input-bordered" name="stock_status" defaultValue={craft.stockStatus}>
                                <option value="In Stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>

                            </select>
                        </div>

                    </div>

                </div>

                <div className="flex justify-center items-center input input-bordered border-2">
                    <input className="" type="submit" value="Update" />
                </div>


            </form>
        </div>
    );
};

export default Update;