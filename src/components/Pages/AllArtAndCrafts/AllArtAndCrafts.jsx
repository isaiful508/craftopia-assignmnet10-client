import { Link, useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";



const AllArtAndCrafts = () => {

    const allArtAndCrafts = useLoaderData();


    return (

        <div className="container lg:w-full md:w-full w-96  mx-auto mb-4">

        <div>
            <h2 className="text-4xl text-center sora-500 mb-4 mt-4 underline">All Arts And Crafts Item</h2>
        </div>
            <div className="overflow-x-auto ">
            <table className="table-auto w-full">
                <thead className="sora-500">
                    <tr>
                        <th className="px-4 py-2">No</th>
                        <th className="px-4 py-2">Item Name</th>
                        <th className="px-4 py-2">Sub Category</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Customization</th>
                        <th className="px-4 py-2">Stock Status</th>
                        <th className="px-4 py-2">Details</th>
                    </tr>
                </thead>
                <tbody className="sora-400">
                    {allArtAndCrafts.map((item, index) => (
                        <tr className="hover:bg-[#d4a37b] hover:text-white" key={item._id}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{item.itemName}</td>
                            <td className="border px-4 py-2">{item.SubCategory}</td>
                            <td className="border px-4 py-2 flex items-center">{item.price} <FaDollarSign></FaDollarSign> </td>
                            <td className="border px-4 py-2">{item.customization}</td>
                            <td className="border px-4 py-2">{item.stockStatus}</td>
                            <td className="border px-4 py-2">
                                <Link to={`/view_details/${item._id}`}>
                                    <button className="link">View Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>

    );
};

export default AllArtAndCrafts;