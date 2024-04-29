import { Link } from "react-router-dom";
import { FaDollarSign } from "react-icons/fa";


const CraftSingleCard = ({craft}) => {

        const {itemName, SubCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName, photoURL} = craft;
    return (
        <div className="card w-96 bg-base-100 shadow-xl border-2 border-[#d4a37b] rounded-lg p-4">
        <figure>
          <img className="rounded-lg" src={photoURL} alt="craft_img" />
          </figure>

        <div className="p-4">

          <h2 className="card-title sora-600">{itemName}</h2>
          <h2 className="card-title "><span className="sora-600 mt-2 mb-2">Category:</span> {SubCategory}</h2>
         
          <p className="sora-500">{shortDescription}</p>

          <div className="flex items-center mt-4 justify-between">
          <p className="flex items-center gap-2"> <FaDollarSign className="text-xl"></FaDollarSign> <span className="sora-500 bg-[#FFB400] btn rounded-full">{price}</span></p>
          <p className="sora-500 "> <span className="sora-600">Status:</span> <span className="btn rounded-full bg-[#FFB400]">{stockStatus}</span></p>
          </div>

          <div className=" mt-6">

            <Link to={`view_details/${craft._id}`}><button className="btn bg-gradient-to-r from-[#d4a37b] to-[#FFB400]">Viw Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CraftSingleCard;