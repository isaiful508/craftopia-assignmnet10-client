import { useLoaderData } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";

const ViewDetails = () => {

  const craftDetails = useLoaderData();
  return (
    <div className="card lg:card-side container mx-auto bg-base-100 shadow-xl mt-6 mb-10">
      <figure><img className="w-96" src={craftDetails.photoURL} alt="Album" /></figure>
      <div className="card-body">
        <h2 className="card-title text-4xl sora-600">{craftDetails.itemName}</h2>
        <p className="sora-500"> Category: {craftDetails.SubCategory}</p>
        <p className="sora-500">{craftDetails.shortDescription}</p>

        <p className="sora-500 flex gap-2 items-center"><FaDollarSign></FaDollarSign> {craftDetails.price}</p>

        <p className="sora-500">Rating:  {craftDetails.rating}</p>
        <p className="sora-500">Customization:  {craftDetails.customization}</p>
        <p className="sora-500"> {craftDetails.processingTime} weeks</p>
        <p className="sora-500">Status:  {craftDetails.stockStatus}</p>
        
      </div>
    </div>
  );
};

export default ViewDetails;