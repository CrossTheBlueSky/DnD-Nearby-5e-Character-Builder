import { useState } from 'react';
import { Button } from '@mantine/core';

const standardArray = [15, 14, 13, 12, 10, 8];
const initialAbilities = {
  strength: '',
  dexterity: '',
  constitution: '',
  intelligence: '',
  wisdom: '',
  charisma: '',
};

const StandardArray = (props) => {
  const [abilities, setAbilities] = useState({ ...initialAbilities });

  const handleSelectChange = (ability, value) => {
    setAbilities((prevAbilities) => ({
      ...prevAbilities,
      [ability]: value,
    }));
  };

  function descriptionUpdate(){
    const description = "The Standard Array method assigns fixed values to ability scores for balanced character creation. Players distribute the following values among their character's ability scores: 15, 14, 13, 12, 10, 8. Each score is used once, ensuring a mix of strengths and weaknesses."
    const heading = "Standard Array"
    props.setDescription(description)
    props.setHeading(heading)
  }

  return (
    <div>
      <h2>Standard Array
      <Button mx=".5rem" h="1rem" size="compact-xs"type="button" onClick={descriptionUpdate}>?</Button>
      </h2>
      <div>
        {Object.keys(abilities).map((ability) => (
          <div key={ability}>
            <label>
              {ability.charAt(0).toUpperCase() + ability.slice(1)}:
              <select
                value={abilities[ability]}
                onChange={(e) => handleSelectChange(ability, e.target.value)}
              >
                <option value="">Assign Value</option>
                {standardArray.map((value, index) => (
                  <option key={index} value={value} disabled={Object.values(abilities).includes(String(value))}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StandardArray;
