import { Link } from "react-router-dom";


const AllArtsAndCraftsTable = ({item, index}) => {
    const {_id,itemName, SubCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName, photoURL} = item;
    return (
        <table className="table">
                {/* head */}
               
                <tbody>
                    {/* row 1 */}
                                        
                    <tr className="hover">
                        <th>{index}</th>
                        <td>{itemName}</td>
                        <td>{SubCategory}</td>
                        <td>{price}</td>
                        <td>{customization}</td>
                        <td>{stockStatus}</td>
                        <td> <Link to={`/view_details/${item._id}`}><button className="link">View Details</button></Link></td>
                    </tr>
                  </tbody>
            </table>
    );
};

export default AllArtsAndCraftsTable;