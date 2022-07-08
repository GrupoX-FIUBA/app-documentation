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
                        <Route path="app-documentation/manual" element={<UserManualScreen />}/>
                        <Route path="app-documentation/wireframes" element={<WireframesScreen />}/>
                        <Route path="app-documentation/navigation" element={<NavigationScreen />}/>
                        <Route path="/*" element={<HomeScreen />}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </> 
}
