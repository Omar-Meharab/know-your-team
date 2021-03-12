import React from 'react';

const TeamCard = (props) => {
    const {strTeam} = props.team;
    // console.log(data);
    return (
        <div>
            <p>this is teamcard {strTeam}</p>
        </div>
    );
};

export default TeamCard;