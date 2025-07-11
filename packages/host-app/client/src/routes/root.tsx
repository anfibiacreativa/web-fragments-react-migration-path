import { Navigate } from 'react-router-dom';
import '../index.css';

function App() {
  // Redirect to store/catalog when the root path is loaded
  return <Navigate to="/store/catalog" replace />;
}

export default App;
