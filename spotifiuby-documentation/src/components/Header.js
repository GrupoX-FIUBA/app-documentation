import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();
    const location = useLocation().pathname;

    return <>
            <div className='header__container'>
                <img src='/assets/logo.png' className='header__pic'></img>
                <div className='header__nav'>
                    <div className={`header__tab ${location==='/home'? 'header__clicked': ''}`}
                        onClick={() => navigate('home')}>
                        Home
                    </div>
                    <div className={`header__tab ${location==='/manual'? 'header__clicked': ''}`}
                        onClick={() => navigate('manual')}>
                        Manual de usuario
                    </div>
                    <div className={`header__tab ${location==='/wireframes'? 'header__clicked': ''}`}
                        onClick={() => navigate('wireframes')}>
                        Wireframes
                    </div>
                    <div className={`header__tab ${location==='/navigation'? 'header__clicked': ''}`}
                        onClick={() => navigate('navigation')}>
                        Navegación
                    </div>
                </div>
                <div />
            </div>
    </>
}
