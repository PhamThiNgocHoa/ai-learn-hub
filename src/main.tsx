import {createRoot} from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import React from 'react'
import {BrowserRouter} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./api/mockApi";
import {UserProvider} from "./contexts/user/UserProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <UserProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </UserProvider>
    </React.StrictMode>
)
