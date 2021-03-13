import React from 'react';
import './TopBanner.css';
import BannerImage from '../../resources/images/top-banner.jpg'

const TopBanner = () => {
    return (
        <div className="container">
            <img className="img-fluid img" src={BannerImage} alt=""/>
            <h1 className="text">Know Your Team</h1>
        </div>
    );
};

export default TopBanner;