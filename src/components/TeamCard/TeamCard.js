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
        <div>
            <div>
                <div className="col">
                    <div className="card">
                        <img src={strTeamBadge} className="card-img-top image" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{strTeam}</h5>
                            <h5 className="card-text">Sport Type: {strSport}</h5>
                            <h5 className="card-text">{strGender}</h5>
                            <button onClick={() => showDetail(idTeam)} class="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;