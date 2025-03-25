import React from 'react';
// import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';

//createRoot(document.getElementById('root')!).render(<Root />);
import { DelayedBootstrap } from './components/DelayedBootstrap';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DelayedBootstrap />
  </React.StrictMode>
);
