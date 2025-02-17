import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";


const CraftSingleCard = ({ craft }) => {

  const { itemName, SubCategory, shortDescription, price, stockStatus, photoURL } = craft;
  return (
    <div className="card w-96 h-full bg-base-100 shadow-xl border-2 border-[#d4a37b] rounded-lg p-4">
      <figure>
        <img className="rounded-lg  "  src={photoURL} alt="craft_img" />
      </figure>

      <div className="p-4">

        <h2 className="card-title sora-600">{itemName}</h2>
        <h2 className="card-title "><span className="sora-600 mt-2 mb-2">Category:</span> {SubCategory}</h2>

        <p className="sora-500">{shortDescription}</p>

        <div className="flex items-center gap-2 mt-4 justify-between">

          <div>
            <p className="flex justify-center items-center sora-500">Price:  <FaDollarSign className="text-xl"></FaDollarSign> <span className="sora-500 bg-[#FFB400] btn rounded-full text-white">{price}</span></p>
          </div>

          <div>
            <p className="sora-500 flex gap-2 items-center"> <span className="sora-600">Status:</span> <span className="btn rounded-full bg-[#FFB400] text-white">{stockStatus}</span></p>
          </div>
        </div>

        <div className=" mt-6">

          <Link to={`view_details/${craft._id}`}><button className="btn bg-gradient-to-r from-[#d4a37b] to-[#FFB400] text-white">Viw Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default CraftSingleCard;