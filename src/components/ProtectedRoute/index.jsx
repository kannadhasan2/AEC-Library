import { Navigate, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
    console.log(children)
    const jwtToken = Cookies.get("jwtToken");
    
    if (jwtToken === undefined) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
