import { useState } from 'react';
import {Button, Container} from '@mantine/core';

const initialAbilities = {
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

const StatRoller = (props) => {
  const [stats, setStats] = useState([]);
  const [abilities, setAbilities] = useState({ ...initialAbilities });

  const generateStats = () => {
    const newStats = Array(6).fill(0).map(() => generateStat());
    setStats(newStats);
    setAbilities({ ...initialAbilities });
  };

  const assignStat = (ability, stat) => {
    setAbilities((prevAbilities) => ({
      ...prevAbilities,
      [ability]: stat,
    }));

    // Remove the assigned stat from the available stats
    setStats((prevStats) => prevStats.filter((item) => item !== stat));
  };

  function setDescription(){
    const description = "The 4d6 Drop Lowest method generates ability scores through dice rolls, adding randomness and potential for higher scores. For each ability score, roll four six-sided dice (4d6), remove the lowest die, and sum the remaining three. Repeat this process six times to determine the six ability scores."
    const heading = "Rolled Stats - 4d6 Drop Lowest"
    props.setDescription(description)
    props.setHeading(heading)
  }

  return (
    <div>
      <h3 style={{margin: ".5rem auto"}}>Rolled Stats Generator<Button onClick={setDescription} type="button"  mx=".5rem" size="compact-xs">?</Button></h3>
      <Button onClick={generateStats} mx=".5rem" size="compact-xs"type="button">Generate Stats</Button>
    <div>
        <h4 style={{margin: ".5rem auto"}}>Generated Stats</h4>
        {stats.map((stat, index) => (
          <span key={index} style={{ margin: '.5rem' }}>{stat}</span>
        ))}
      </div>
      <div>
        <h3>Assign Stats to Abilities</h3>
        {Object.keys(abilities).map((ability) => (
          <div key={ability}>
            <span>{ability.charAt(0).toUpperCase() + ability.slice(1)}: </span>
            {abilities[ability] || (
              <select onChange={(e) => assignStat(ability, Number(e.target.value))} value={abilities[ability] || ''}>
                <option value="">Assign Scores</option>
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

export default StatRoller;