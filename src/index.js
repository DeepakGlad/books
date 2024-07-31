import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App'

import { Provider } from './Context/Books';

const root = document.getElementById('root');
const el = ReactDom.createRoot(root);

el.render(<Provider><App/></Provider>);
