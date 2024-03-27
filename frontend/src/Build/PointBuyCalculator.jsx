import { useState, useEffect } from 'react';
import {Button} from '@mantine/core'
import { useSelector, useDispatch } from 'react-redux';
import { setAbilityScoreChoice } from './abilityScoreChoiceSlice';


const abilityCost = {
  8: 0,
  9: 1,
  10: 2,
  11: 3,
  12: 4,
  13: 5,
  14: 7,
  15: 9,
};

const maxPoints = 27;

const PointBuyCalculator = (props) => {

  const dispatch = useDispatch();


  const [points, setPoints] = useState(maxPoints);
  const [abilities, setAbilities] = useState({
    strength: 8,
    dexterity: 8,
    constitution: 8,
    intelligence: 8,
    wisdom: 8,
    charisma: 8,
  });


  const updateAbilityScore = (ability, delta) => {
    const newValue = abilities[ability] + delta;
    if (newValue < 8 || newValue > 15) return;

    const cost = abilityCost[newValue] - abilityCost[abilities[ability]];
    if (points - cost < 0) return;

    setPoints(points - cost);
    dispatch(setAbilityScoreChoice({ ...abilities, [ability]: newValue}));
    setAbilities({ ...abilities, [ability]: newValue });

  };

  function descriptionUpdate(){

    const description = <div>
    <h2>D&D 5e Point Buy System</h2>
    <p>The point buy system allows players to customize their character&apos;s ability scores at the start. Each player has 27 points to spend on increasing their character&apos;s ability scores. The minimum score for an ability is 8, and the maximum score before applying racial modifiers is 15.</p>
    <p>Below is a table showing the cost in points for each score:</p>
    <table>
        <tr>
            <th>Score</th>
            <th>Point Cost</th>
        </tr>
        <tr>
            <td>8</td>
            <td>0</td>
        </tr>
        <tr>
            <td>9</td>
            <td>1</td>
        </tr>
        <tr>
            <td>10</td>
            <td>2</td>
        </tr>
        <tr>
            <td>11</td>
            <td>3</td>
        </tr>
        <tr>
            <td>12</td>
            <td>4</td>
        </tr>
        <tr>
            <td>13</td>
            <td>5</td>
        </tr>
        <tr>
            <td>14</td>
            <td>7</td>
        </tr>
        <tr>
            <td>15</td>
            <td>9</td>
        </tr>
    </table>
</div>

    props.setDescription(description)
    props.setHeading("Point Buy Calculator")
  }
  return (
    <div>
      <h2>Point Buy Calculator
        <Button mx=".5rem" h="1rem" size="compact-xs"type="button" onClick={descriptionUpdate}>?</Button>
      </h2>
      <p><strong>Points Remaining: {points}</strong></p>
      {Object.keys(abilities).map((ability) => (
        <div key={ability}>
          <Button onClick={() => updateAbilityScore(ability, -1)} mx=".5rem" h="1rem" size="compact-xs"type="button">-</Button>
          <span> {ability.charAt(0).toUpperCase() + ability.slice(1)}: {abilities[ability]} </span>
          <Button onClick={() => updateAbilityScore(ability, 1)} mx=".5rem" h="1rem" size="compact-xs"type="button">+</Button>
        </div>
      ))}
    </div>
  );
};

export default PointBuyCalculator;
