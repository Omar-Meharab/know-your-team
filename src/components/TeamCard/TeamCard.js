import React from 'react';
import './TeamCard.css';

const TeamCard = (props) => {
    const { strTeam, strTeamBadge, strSport, strGender } = props.team;
    // console.log(data);
    return (
        <div>
            <div>
                <div class="col">
                    <div class="card">
                        <img src={strTeamBadge} class="card-img-top image" alt="" />
                        <div class="card-body">
                            <h5 class="card-title">{strTeam}</h5>
                            <h5 class="card-text">{strSport}</h5>
                            <h5 class="card-text">{strGender}</h5>
                            <button class="btn btn-primary">Explore</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;