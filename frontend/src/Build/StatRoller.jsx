import React, { useState } from 'react';
import { Button } from '@mantine/core';
import { useSelector, useDispatch } from 'react-redux';
import { setAbilityScoreChoice } from './abilityScoreChoiceSlice';

const initialabilityScores = {
  strength: null,
  dexterity: null,
  constitution: null,
  intelligence: null,
  wisdom: null,
  charisma: null,
};

const rollDice = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const generateStat = () => {
  const rolls = [rollDice(), rollDice(), rollDice(), rollDice()];
  rolls.sort((a, b) => a - b).shift(); // Sort and remove the lowest
  return rolls.reduce((total, current) => total + current, 0); // Sum the remaining
};

const AbilityScoreGenerator = (props) => {
  const [stats, setStats] = useState([]);

  const dispatch = useDispatch();
  const abilityScores = useSelector((state) => state.abilityScores.abilityScores);

  const generateStats = () => {
    const newStats = Array(6).fill(0).map(() => generateStat());
    setStats(newStats);
    dispatch(setAbilityScoreChoice({ ...initialabilityScores }));
  };

  const assignStat = (ability, stat) => {
    const newAbilityScores = { ...abilityScores, [ability]: stat};
    dispatch(setAbilityScoreChoice(newAbilityScores));
    console.log(abilityScores);

    // Remove the first instance of the assigned stat from the available stats
    setStats((prevStats) => {
      const index = prevStats.indexOf(stat);
      if (index !== -1) {
        const newStats = [...prevStats];
        newStats.splice(index, 1);
        return newStats;
      }
      return prevStats;
    });
  };

  function descriptionUpdate(){
    const heading = '4d6 Drop Lowest'
    const description = 'The 4d6 Drop Lowest method generates ability scores through dice rolls, adding randomness and potential for higher scores. For each ability score, roll four six-sided dice (4d6), remove the lowest die, and sum the remaining three. Repeat this process six times to determine the six ability scores.'
    props.setHeading(heading)
    props.setDescription(description)  
  }

  return (
    <div>
      <h2>Ability Score Generator
      <Button mx=".5rem" h="1rem" size="compact-xs"type="button" onClick={descriptionUpdate}>?</Button>
      </h2>
      <Button onClick={generateStats}>Generate Stats</Button>
      <div>
        <h3>Generated Stats</h3>
        {stats.map((stat, index) => (
          <span key={index} style={{ margin: '0 10px' }}>{stat}</span>
        ))}
      </div>
      <div>
        <h3>Assign Stats</h3>
        {Object.keys(abilityScores).map((ability) => (
          <div key={ability}>
            <span>{ability.charAt(0).toUpperCase() + ability.slice(1)}: </span>
            {abilityScores[ability] || (
              <select onChange={(e) => assignStat(ability, Number(e.target.value))} value={abilityScores[ability] || ''}>
                <option value="">Select a stat</option>
                {stats.map((stat, index) => (
                  <option key={index} value={stat}>{stat}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AbilityScoreGenerator;