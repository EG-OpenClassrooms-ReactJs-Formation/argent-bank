import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


export default function PrivateRoute({ children }) {
    const auth = useSelector((state)=> state.auth)
    
    if (!auth.token) {
        // not logged in so redirect to login page with the return url
        return <Navigate to="/login" />
    }

    // authorized so return child components
    return children;
}