import { Navigate } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default PrivateRoute;
