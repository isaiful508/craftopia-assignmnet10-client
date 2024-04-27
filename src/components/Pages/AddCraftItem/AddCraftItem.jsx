

const AddCraftItem = () => {
    return (
        <section className="container md:w-3/4 lg:1/2 mx-auto border-2  p-6 dark:bg-gray-100 dark:text-gray-900">

            <form className=" flex flex-col  border-2  space-y-12">




                <div className=" gap-4">

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Item Name</label>

                            <input type="text" name="item_name" placeholder="Item Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>


                        <div className="col-span-full w-1/2 sm:col-span-3">

                            <label className="text-sm">Subcategory Name</label>

                            <input name="subcategory_Name" type="text" placeholder="Subcategory Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>



                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label htmlFor="email" className="text-sm">Short Description</label>

                            <input name="short description" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Price</label>

                            <input name="price" type="text" placeholder="Price" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">Rating</label>

                            <input type="text" placeholder="Rating" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Customization</label>

                            <input name="customization" type="text" placeholder="Customization" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label htmlFor="email" className="text-sm">Processing Time</label>

                            <input name="processing_time" type="text" placeholder="Processing Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">Stock Status</label>

                            <input name="stockStatus" type="text" placeholder="Stock Status" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>

                    <div className="flex justify-center items-center gap-4">

                        <div className="w-1/2">
                            <label className="text-sm">User Email</label>

                            <input name="email" type="email" placeholder="User Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />
                        </div>

                        <div className="w-1/2">

                            <label className="text-sm">User Name</label>

                            <input name="user_name" type="text" placeholder="User Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                        </div>

                    </div>




                    <div className="w-full">

                        <label className="">Photo URL</label>
                        <input id="address" type="text" placeholder="Photo URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered" />

                    </div>




                </div>

                <div className="flex justify-center items-center input input-bordered border-2">
                    <input className="" type="submit" value="Add Craft" />
                </div>


            </form>
        </section>
    );
};

export default AddCraftItem;