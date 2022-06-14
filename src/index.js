import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

import configureStore from "./redux/store";
const store = configureStore();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App store={store} />
    </React.StrictMode>
);