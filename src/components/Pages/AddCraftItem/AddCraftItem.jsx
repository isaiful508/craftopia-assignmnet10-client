import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from 'sweetalert2'


const AddCraftItem = () => {

    const {user} = useContext(AuthContext);


    
    const handAddCraftItem = (e) => {
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
        const email = form.email.value;
        const userName = form.user_name.value;
        const photoURL = form.photo_url.value;
    
        const newCraftItem = {itemName, SubCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName, photoURL};
    
        console.log(newCraftItem);

        //send data to the server

        fetch('https://craftopia-server-assignment10.vercel.app/craft_items', {
        method : 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(newCraftItem) 
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Item Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'X'
                  })

                  //reset form
                  form.reset()
            }
        })
    


    }




    return (
        <div className="container md:w-3/4 lg:1/2 mx-auto border-2  p-6 dark:bg-gray-100 dark:text-gray-900">

            <form onSubmit={handAddCraftItem} className=" flex flex-col  border-2  space-y-12">




                <div className=" gap-4">

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Item Name</label>

                            <input type="text" name="item_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>


                        <div className="col-span-full w-1/2 sm:col-span-3">

                            <label className="text-sm">Subcategory Name</label>

                            <select className="w-full input input-bordered" name="sub_category">
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
                            <label  className="text-sm">Short Description</label>

                            <input name="short_description" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Price</label>

                            <input name="price" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Rating</label>

                            <input type="text" name="rating" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Customization</label>

                            <select className="w-full input input-bordered" name="customization">
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                
                            </select>

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label htmlFor="email" className="text-sm">Processing Time</label>

                            <input name="processing_time" type="text" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Stock Status</label>

                            <select className="w-full input input-bordered" name="stock_status">
                                <option value="In Stock">In stock</option>
                                <option value="Made to Order">Made to Order</option>
                                
                            </select>
                         </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">User Email</label>

                            <input value={user.email} name="email" type="email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">User Name</label>

                            <input value={user.displayName} name="user_name" type="text" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>




                    <div className="w-full">

                        <label className="">Photo URL</label>
                        <input name="photo_url" type="text" placeholder="Photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                    </div>




                </div>

                <div className="flex justify-center items-center input input-bordered border-2">
                    <input className="" type="submit" value="Add Craft Item" />
                </div>


            </form>
        </div>
    );
};

export default AddCraftItem;