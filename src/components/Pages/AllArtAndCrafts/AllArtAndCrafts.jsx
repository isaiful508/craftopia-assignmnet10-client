import { useLoaderData } from "react-router-dom";
import AllArtsAndCraftsTable from "./AllArtsAndCraftsTable/AllArtsAndCraftsTable";


const AllArtAndCrafts = () => {

    const allArtAndCrafts = useLoaderData();
    

    return (
        <div className="container mx-auto overflow-x-auto flex flex-col justify-center items-center w-full">
            <table className="table">
            <thead>
                    <tr>
                        <th>No</th>
                        <th>Item Name</th>
                        <th>Sub Category</th>
                        <th>Price</th>
                        <th>Customization</th>
                        <th>Stock Status</th>
                        <th>Details</th>
                    </tr>
                </thead>
            </table>
           {
            allArtAndCrafts.map((item, index) =><AllArtsAndCraftsTable
                 item={item}
                 key={item._id}
                 index={index + 1}
                 ></AllArtsAndCraftsTable>)
           }
        </div>
    );
};

export default AllArtAndCrafts;