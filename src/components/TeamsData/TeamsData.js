import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';

const TeamCards = () => {

    const [teamsData, setTeamsData] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res => res.json())
        .then(data => setTeamsData(data.teams))
    }, [])

    console.log(teamsData);

    return (
        <div>
            <p>this is card</p>
            {
                teamsData.map((team) => <TeamCard key={team.idTeam} team={team}></TeamCard>)
            }
            
        </div>
    );
};

export default TeamCards;