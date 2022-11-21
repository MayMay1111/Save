import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useRef, useState } from "react";

import './header.scss';

const headerNavs = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {

    const pathName = useLocation()
    const headerRef = useRef(null)

    const [active, setActive] = useState()

    useEffect(() => {
        headerNavs.map((element, index) => {
            if (element.path === pathName.pathname) {
                setActive(index)
            }
        })

        const shrinkHeader = () => {
            if (window.scrollY > 100) {
                headerRef.current.classlist.add('shrink')
            } else {
                headerRef.current.classlist.remove('shrink')
            }
        }
        window.addEventListener('scroll', shrinkHeader)
        return () => window.removeEventListener('scroll', shrinkHeader)
    }, [])

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <Link to="/" className="logo">
                    <img src="https://t4.ftcdn.net/jpg/01/06/47/61/360_F_106476142_zMZkkTkhMeq0DIjV20oJI00e3QXLYIGN.jpg" alt="" />
                    <div>Movie</div>
                </Link>

                <ul className="header__nav">
                    {headerNavs.map((nav, index) => (
                        <li key={index} className={`${index === active ? 'active' : ''}`} onClick={() => setActive(index)}>
                            <Link to={nav.path}>
                                {nav.display}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header