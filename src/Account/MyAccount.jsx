import React, { useState, useEffect } from 'react';
import { useNavigate, Outlet, useLocation, Link } from 'react-router-dom';
import { AccountTabs } from '../ConstentData'
import Auth from '../Authenticion/auth';
import Beyoung from '../assets/beyoung2.png'
import { TbShieldLockFilled } from "react-icons/tb";
import { SlLocationPin } from 'react-icons/sl';
import MyAccountDropdown from './MyAccountDropdown';
import './account.css'
function MyAccount() {
    const isAuthenticated = Auth.isAuthenticated();
    const [activeTab, setActiveTab] = useState('profile');
    const [userName, setUserName] = useState('');
    const [isAccountDropdownOpen, setAccountDropdownOpen] = useState(false);
    const handleAccountDropdownToggle = () => setAccountDropdownOpen(!isAccountDropdownOpen);
    useEffect(() => {
        const storedUserName = sessionStorage.getItem('userInfoN');
        // Update the state with the retrieved name & email
        console.log(storedUserName);
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);
    // get the first later of User 
    const getFirstLetter = () => {
        if (userName) {
            const nameArray = userName.split(' ');
            if (nameArray.length >= 2) {
                const [firstName, lastName] = nameArray;
                return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
            } else {
                return userName.charAt(0).toUpperCase();
            }
        }
        return '';
    };
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        const path = location.pathname;
        const segments = path.split('/');
        const lastSegment = segments[segments.length - 1];
        setActiveTab(lastSegment)
    }, [location]);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        navigate(`/myaccount/${tabName}`);
    };

    const handleLogout = () => {
        Auth.logout();
        navigate('/');
    };

    return (
        <>
            <div className="myaccount-section">
                <div className="myaccount-header">
                    <div className="navi-container-top">
                        <div className="track-order-sec">
                            <SlLocationPin /> <span>TRACK YOUR ORDER</span>
                        </div>
                        <div className="auth-sec">
                            {isAuthenticated ? (
                                <>
                                    <div className="auth-btn" onMouseEnter={handleAccountDropdownToggle} onMouseLeave={handleAccountDropdownToggle}>My Account
                                        {isAccountDropdownOpen && <MyAccountDropdown onClose={handleAccountDropdownToggle} />}
                                    </div>
                                    <hr className="diveder" />
                                    <div className="auth-btn" onClick={handleLogout}>Logout</div>
                                </>
                            ) : (
                                <>
                                    <Link to='/login' className="auth-btn">LogIn</Link>
                                    <hr className="diveder" />
                                    <Link to='/signup' className="auth-btn">SignUp</Link>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="ma-header">
                        <div className="ma-left">
                            <div className="logo">
                                <Link to="/">
                                    <img src={Beyoung} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="ma-right">
                            <div className="ma-icon"><TbShieldLockFilled /></div>
                            <h2>100% SECURE ACCOUNT</h2>
                        </div>
                    </div>
                </div>
                <div className="myaccount-container">
                    <div className='tab-header'>
                        <div className="account-head">
                            <div className="profile-picture">
                                <div className="profile-letter">{getFirstLetter()}</div>
                            </div>
                            <p className='u-name'>{userName}</p>
                        </div>
                        <div className="account-bottom">
                            {AccountTabs.map((tab) => (
                                <div
                                    key={tab.tabName}
                                    className={`tab ${activeTab === tab.tabName ? 'active' : ''}`}
                                    onClick={() => handleTabClick(tab.tabName)}
                                >
                                    {tab.label}
                                </div>
                            ))}
                            <div className="log-out-btn" onClick={handleLogout}>Logout</div>
                        </div>
                    </div>
                    <div className='tab-content'>
                        {/* Render the content based on the active tab */}
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyAccount