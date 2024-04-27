import { Link } from "react-router-dom";


const CraftSingleCard = ({craft}) => {

        const {_id,itemName, SubCategory, shortDescription, price, rating, customization, processingTime, stockStatus, email, userName, photoURL} = craft;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photoURL} alt="craft_img" /></figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{shortDescription}</p>

          <div className="card-actions justify-end">
            <Link to={`view_details/${craft._id}`}><button className="btn btn-primary">Viw Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default CraftSingleCard;