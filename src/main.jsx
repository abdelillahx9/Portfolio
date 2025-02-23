import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { HashRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Get the root element
const rootElement = document.getElementById('root');

// Check if the root element exists
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <HashRouter>
        <App />
      </HashRouter>
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}