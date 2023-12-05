import React from 'react';
import Header from '../components/Header';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../container/Dashboard';
import Product from '../container/Product';
import Cart from '../container/Cart'; 
import Dummy from '../empty json product/dummy';

export default function Home() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<Dashboard />}/>
                <Route path='/Product/:id' element={<Product/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/dummy' element={<Dummy/>}/>
            </Routes>
        </div>
    );
}