import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const MyComponent = () => {
  
    return (
      <React.StrictMode>
          <App/>
      </React.StrictMode>
    );
  };
  
  ReactDOM.createRoot(document.getElementById('root')).render(<MyComponent />);