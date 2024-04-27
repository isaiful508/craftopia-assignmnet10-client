import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../Loader/Loader";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
}
export default PrivateRoutes;