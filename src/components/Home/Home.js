import React from 'react';
import TeamData from '../TeamsData/TeamsData';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';

const Home = () => {
    return (
        <div className="App">
            <TopBanner></TopBanner>
            <TeamData></TeamData>
        </div>
    );
};

export default Home;