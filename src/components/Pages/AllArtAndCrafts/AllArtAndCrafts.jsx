import { Link, useLoaderData } from "react-router-dom";



const AllArtAndCrafts = () => {

    const allArtAndCrafts = useLoaderData();


    return (

        <div className="overflow-x-auto container mx-auto">
            <table className="table-auto w-full">
                <thead>
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
                <tbody>
                    {allArtAndCrafts.map((item, index) => (
                        <tr className="hover:bg-gray-200" key={item._id}>
                            <td className="border px-4 py-2">{index + 1}</td>
                            <td className="border px-4 py-2">{item.itemName}</td>
                            <td className="border px-4 py-2">{item.SubCategory}</td>
                            <td className="border px-4 py-2">{item.price}</td>
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



        // <div className="container mx-auto overflow-x-auto">
        //     <table className="table-auto w-full">
        //         <thead>
        //             <tr>
        //                 <th>No</th>
        //                 <th>Item Name</th>
        //                 <th>Sub Category</th>
        //                 <th>Price</th>
        //                 <th>Customization</th>
        //                 <th>Stock Status</th>
        //                 <th>Details</th>
        //             </tr>
        //         </thead>


        //         <tbody>

        //             {
        //                 allArtAndCrafts.map((item, index) =>
        //                     <tr className="hover"

        //                         key={index}
        //                     >
        //                         <th>{index + 1}</th>
        //                         <td>{item.itemName}</td>
        //                         <td>{item.SubCategory}</td>
        //                         <td>{item.price}</td>
        //                         <td>{item.customization}</td>
        //                         <td>{item.stockStatus}</td>
        //                         <td> <Link to={`/view_details/${item._id}`}><button className="link">View Details</button></Link></td>
        //                     </tr>
        //                 )
        //             }

        //         </tbody>

        //     </table>
        // </div>
    );
};

export default AllArtAndCrafts;