import { useState } from 'react';
import {Button} from '@mantine/core'

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

const PointBuyCalculator = () => {
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
    setAbilities({ ...abilities, [ability]: newValue });
  };

  return (
    <div>
      <h2>Point Buy Calculator
        <Button mx=".5rem" h="1rem" size="compact-xs"type="button">?</Button>
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
