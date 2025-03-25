import React, { useState, useEffect } from "react";
import Root from '../routes/root';
import CartPage from '../routes/cart';
import StorePage from '../routes/store';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/cart/*',
		element: <CartPage />,
	},
	{
		path: '/store/*',
		element: <StorePage />,
	},
]);

export const DelayedBootstrap: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return <div>Bootstrapping shell app...</div>;
  }

  return <RouterProvider router={router} />;
};
