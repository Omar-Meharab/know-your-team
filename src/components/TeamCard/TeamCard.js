import React from 'react';

const TeamCard = (props) => {
    const data = props.teamsData;
    const [strTeam] = data;
    return (
        <div>
            {
                data.map(data => <h1>{strTeam}</h1>)
            }
        </div>
    );
};

export default TeamCard;