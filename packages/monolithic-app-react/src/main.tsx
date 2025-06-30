import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { useState, useEffect } from 'react';

const Root: React.FC = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a slow load with a timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <App />;
};

createRoot(document.getElementById('root')!).render(<Root />);
