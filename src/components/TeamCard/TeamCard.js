import React from 'react';
import { useHistory } from 'react-router';
import './TeamCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TeamCard = (props) => {
    const { strTeam, strTeamBadge, strSport, strGender, idTeam } = props.team;
    const history = useHistory();
    const showDetail = id => {
        const url = `team/${id}`;
        history.push(url);
    }
    // console.log(data);
    return (
        <div className="col">
            <div className="card">
                <img src={strTeamBadge} className="card-img-top image" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{strTeam}</h5>
                    <p className="card-text"><strong>Sport Type: {strSport}</strong></p>
                    <p className="card-text"><strong>{strGender}</strong></p>
                    <button onClick={() => showDetail(idTeam)} class="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;