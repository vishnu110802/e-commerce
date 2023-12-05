import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Remove BrowserRouter import
import Home from '../routes/Home.js';

export default function Router() {
    return (
        <Routes>
            <Route path="*" element={<Home />} />
        </Routes>
    );
}
