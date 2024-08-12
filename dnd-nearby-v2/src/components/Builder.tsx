"use client"

import React, { useState } from 'react';
import Background from './Background';
import AbilityScores from './AbilityScores';
import Classes from './Classes';
import Spells from './Spells';

const tabs = [
  { label: 'Background and Race', content: <Background /> },
  { label: 'Ability Scores', content: <AbilityScores /> },
  { label: 'Classes', content: <Classes /> },
  { label: 'Spells', content: <Spells /> },
  { label: 'Items', content: <div>This is gonna be its own can of worms for later</div> },
];

const Builder: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-4 font-medium text-sm focus:outline-none ${
              activeTab === index
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default Builder;