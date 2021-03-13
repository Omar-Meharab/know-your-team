import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BannerImage from '../../resources/images/top-banner.jpg';
import MaleImage from '../../resources/images/male.png';
import FemaleImage from '../../resources/images/female.png';
import './TeamDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRegistered, faFlag, faMars, faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


const TeamDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.teams[0]));
    }, [id])

    const {strTeamBadge, intFormedYear, strCountry, strSport, strGender, strFacebook, strTwitter, strInstagram} = details;

    return (
        <div className="bg-color">
            <div className="container">
                <div>
                    <img className="img-fluid img" src={BannerImage} alt="" />
                    <img className="centered" src={strTeamBadge} alt="" />
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <h1>Name: {details.strTeam}</h1>
                        <p><FontAwesomeIcon icon={faRegistered} /> Established: {intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</p>
                    </div>
                    <div className="col-md-5">
                        {
                            strGender === "Male" ? <img className="img-fluid" src={MaleImage} alt="" /> : <img className="img-fluid" src={FemaleImage} alt="" />
                        }
                    </div>
                </div>
                <div className="bg-color-blue">
                    <h3>Team History</h3> <br />
                    <p>{details.strDescriptionEN}</p>
                </div>
                <div className="social-icons">
                    <a target="_blank" rel="noreferrer" href={'https://'+strFacebook}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a target="_blank" rel="noreferrer" href={'https://'+strTwitter}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a target="_blank" rel="noreferrer" href={'https://'+strInstagram}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;