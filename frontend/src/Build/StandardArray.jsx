import { useState } from 'react';

const standardArray = [15, 14, 13, 12, 10, 8];
const initialAbilities = {
  strength: '',
  dexterity: '',
  constitution: '',
  intelligence: '',
  wisdom: '',
  charisma: '',
};

const StandardArray = () => {
  const [abilities, setAbilities] = useState({ ...initialAbilities });

  const handleSelectChange = (ability, value) => {
    setAbilities((prevAbilities) => ({
      ...prevAbilities,
      [ability]: value,
    }));
  };

  return (
    <div>
      <h2>Standard Array</h2>
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
