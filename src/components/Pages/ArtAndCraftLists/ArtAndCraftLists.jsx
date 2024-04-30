import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa6";
import { Helmet } from "react-helmet";


const ArtAndCraftLists = () => {
    const { user } = useContext(AuthContext);
    const [craft, setCraft] = useState([]);
    const [control, setControl] = useState(false);
    const [filter, setFilter] = useState("");
    useEffect(() => {
        fetch(`https://craftopia-server-assignment10.vercel.app/art_&_craft_lists/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setCraft(data);
            })
    }, [user, control])


    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#FFB400",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://craftopia-server-assignment10.vercel.app/delete/${id}`, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        setControl(!control)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                })
              
            }
          })
    }


    const handleFilter = (e) =>{
        setFilter(e.target.value);
    }

    const filterItems = filter ? craft.filter((item) => item.customization === filter) : craft ;


    return (
        <div className=" container mx-auto ">
            <Helmet>
                <title>Craftopia | All Lists </title>
            </Helmet>

        <div className="flex justify-end mb-4">
            <select
            value={filter}
            onChange={handleFilter}
            className="p-2 border rounded-md"
            >
                <option value="">Filter By Customization</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select>
        </div>




           <div className="grid mb-6  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            
            filterItems.map(item => 
                <div 
                key={item._id}
                className="card w-96 bg-base-100 shadow-xl border-2 border-[#d4a37b] rounded-lg p-4">
                <figure>
                  <img className="rounded-lg" src={item.photoURL} alt="craft_img" />
                  </figure>
        
                <div className="p-4">
        
                  <h2 className="card-title sora-600">{item.itemName}</h2>
                  <h2 className="card-title "><span className="sora-600 mt-2 mb-2">Category:</span> {item.SubCategory}</h2>
                 
                  <p className="sora-500">{item.shortDescription}</p>
        
                  <div className="flex items-center mt-4 justify-between">

                  <p className="flex items-center sora-500">Price:  <FaDollarSign className="text-xl"></FaDollarSign> <span className="sora-500 bg-[#FFB400] btn rounded-full text-white">{item.price}</span></p>

                  <p className="sora-500 flex items-center"> <span className="sora-600">Status:</span> <span className="btn rounded-full bg-[#FFB400] text-white">{item.stockStatus}</span></p>
                  </div>

                    <div className=" card-actions mt-4 ">
                        <Link to={`/update/${item._id}`}className="btn bg-gradient-to-r from-[#d4a37b] to-[#FFB400] text-white">Update</Link>
                        <button onClick={() => handleDelete(item._id)} className="btn bg-gradient-to-r from-[#d4a37b] to-[#FFB400] text-white">Delete</button>
                    </div>
                </div>
            </div>)
            
            }
           </div>
        </div>
    );
};

export default ArtAndCraftLists;