
import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const auth = useAuth();

    if (!auth) {
        return <Navigate to="/" replace></Navigate>
    }

    return children;
}

export default PrivateRoute;