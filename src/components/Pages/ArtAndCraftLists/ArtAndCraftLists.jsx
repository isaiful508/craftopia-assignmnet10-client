import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Swal from "sweetalert2";


const ArtAndCraftLists = () => {
    const { user } = useContext(AuthContext);
    const [craft, setCraft] = useState([]);
    const [control, setControl] = useState(false);
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
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/delete/${id}`, {
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


    return (
        <div className=" container mx-auto ">
           <div className="grid  md:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
            
            craft.map(item => 
            <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                <figure>
                    <img src={item.photoURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{item.itemName}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions ">
                        <button className="btn btn-primary">Update</button>
                        <button onClick={() => handleDelete(item._id)} className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>)
            
            }
           </div>
        </div>
    );
};

export default ArtAndCraftLists;