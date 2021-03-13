import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import TeamCard from '../TeamCard/TeamCard';
import './TeamData.css';

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
        <div class="padding">
            <div class="row row-cols-1 row-cols-md-3 g-4 card-div">
                {
                    teamsData.map((team) => <TeamCard key={team.idTeam} team={team}></TeamCard>)
                }
            </div>
        </div>
    );
};

export default TeamCards;