import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { womenDropdownData, menDropdownData } from '../ConstentData';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdClear } from 'react-icons/md';
import Beyoung from '../assets/beyoung2.png'

function SightDropdown({ onClose }) {
    const [isMenVisible, setIsMenVisible] = useState(false);
    const [isWomenVisible, setIsWomenVisible] = useState(false);

    const toggleMenVisibility = () => {
        setIsMenVisible(!isMenVisible);
        setIsWomenVisible(false); 
    };

    const toggleWomenVisibility = () => {
        setIsWomenVisible(!isWomenVisible);
        setIsMenVisible(false); 
    };

    return (
        <div className="sight-dropdown">
            <div className="modal-content">
                <div className="model-content-head">
                <div className="logo">
                  <Link to="/" onClick={onClose}>
                    <img src={Beyoung} alt="" />
                  </Link>
                </div>
                    <button className="close-modal-btn" onClick={onClose}>
                        <MdClear />
                    </button>
                </div>
                <div className="model-content-body">
                    <h3 onClick={toggleMenVisibility}> <Link to="/mens-clothing" onClick={onClose}>Men</Link> {isMenVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}</h3>
                    {isMenVisible && (
                        <div className="sight-drop-con">
                            {menDropdownData.map((data, index) => (
                                <div className="d-content" key={index}>
                                    <h4>{data.title}</h4>
                                    {data.items.map((dcon, index) => (
                                        <Link key={index} to={`/men/${dcon.subCategory}`} onClick={onClose}>
                                            {dcon.heading}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <hr />
                    <h3 onClick={toggleWomenVisibility}><Link to="/womens-clothing" onClick={onClose}>Women</Link> {isWomenVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}</h3>
                    {isWomenVisible && (
                        <div className="sight-drop-con">
                            {womenDropdownData.map((data, index) => (
                                <div className="d-content" key={index}>
                                    <h4>{data.title}</h4>
                                    {data.items.map((dcon, index) => (
                                        <Link key={index} to={`/women/${dcon.subCategory}`} onClick={onClose}>
                                            {dcon.heading}
                                        </Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                    <hr />
                    <div className="sight-drob-con">
                        <Link to="/combo-products" onClick={onClose}> Combo-Product</Link>
                        <Link to="/bb-ke-favorites" onClick={onClose}>BB-KE-FEVOURITES</Link>
                        <Link to="/winter-wears" onClick={onClose}>WINTER-WEARS</Link>
                        <Link to="/new-arrival" onClick={onClose}>NEW-ARRIVALS</Link>
                        <Link to="/urban-shirt" onClick={onClose}>URBAN-SHIRT</Link>
                        <Link to="/tracksuit-pants" onClick={onClose}>CARGO-PANTS</Link>
                        <Link to="/oversize-tshirts" onClick={onClose}>OVERSIZE T SHIRT</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SightDropdown;
