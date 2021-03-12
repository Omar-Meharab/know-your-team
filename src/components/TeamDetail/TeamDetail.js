import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import BannerImage from '../../resources/images/top-banner.jpg';
import Male from '../../resources/images/male.png';
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

    return (
        <div className="bg-color">
            <div className="container">
                <div>
                    <img className="img-fluid img" src={BannerImage} alt="" />
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <h1>Name: {details.strTeam}</h1>
                        <p><FontAwesomeIcon icon={faRegistered} /> Established: {details.intFormedYear}</p>
                        <p><FontAwesomeIcon icon={faFlag} /> Country: {details.strCountry}</p>
                        <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {details.strSport}</p>
                        <p><FontAwesomeIcon icon={faMars} /> Gender: {details.strGender}</p>
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src={Male} alt="" />
                    </div>
                </div>

                <div className="bg-color-blue">
                    <h3>Team History</h3> <br/>
                    <p>{details.strDescriptionEN}</p>
                </div>
                <div className="social-icons">
                    <a href={details.strFacebook}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href={details.strTwitter}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a href={details.strInstagram}><FontAwesomeIcon icon={faInstagramSquare} /></a>
                </div>

            </div>
        </div>
    );
};

export default TeamDetail;