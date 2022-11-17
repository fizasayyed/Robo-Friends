import React from 'react';
// import ReactDOM from 'react-dom'; <= The old method The new way to import createRoot:
import { createRoot } from "react-dom/client";
import './index.css';
import App from './containers/App';
import 'tachyons';

const root = createRoot(document.getElementById('root'));
root.render(<App />);

