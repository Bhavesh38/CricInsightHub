import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./utilities/authentication.js";

const PrivateRoute = ({ Component }) => {
    const [hasAuth, sethasAuth] = useState(false);
    useEffect(() => {
        const flag = isAuthenticated();
        sethasAuth(flag);
    }, []);



    const intervalId = setInterval(() => {
        const flag = isAuthenticated();
        sethasAuth(flag);
    }, 60000);
    // Your authentication logic goes here...

    return hasAuth ? <Component /> : <Navigate to="/login" />;
};
export default PrivateRoute;