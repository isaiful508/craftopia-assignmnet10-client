import { useContext, useEffect} from "react";
import { AuthContext } from "../../../providers/AuthProviders";


const ArtAndCraftLists = () => {
    const {user} = useContext(AuthContext);
    // console.log(user.email)
    useEffect(() =>{
        fetch(`http://localhost:5000/art_&_craft_lists/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[user])


    return (
        <div>
            <h2>This is art and cratf lists</h2>
        </div>
    );
};

export default ArtAndCraftLists;