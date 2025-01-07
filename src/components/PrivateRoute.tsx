import { Navigate } from 'react-router-dom';
import { useUser } from './UserContext';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isLogged } = useUser();

  if (!isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
