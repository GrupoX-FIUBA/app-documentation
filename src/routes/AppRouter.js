import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../components/Header';
import { HomeScreen } from '../screens/HomeScreen';
import { NavigationScreen } from '../screens/NavigationScreen';
import { UserManualScreen } from '../screens/UserManualScreen';
import { WireframesScreen } from '../screens/WireframesScreen';

export const AppRouter = () => {

    return <>
            <BrowserRouter>
                <Header />
                <div className='background'>
                    <Routes>
                        <Route path="manual" element={<UserManualScreen />}/>
                        <Route path="wireframes" element={<WireframesScreen />}/>
                        <Route path="navigation" element={<NavigationScreen />}/>
                        <Route path="/*" element={<HomeScreen />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </> 
}
