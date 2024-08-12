import React from "react";

function Builder() {
  return (
    <>
      <div className="flex space-x-4 mb-4">
        {["Start", "Build", "Shop", "Manage"].map((tab) => (
          <button key={tab} className="bg-red-800 px-4 py-2 rounded">
            {tab}
          </button>
        ))}
      </div>
      <div className="flex space-x-4 mb-4">
        {[
          "Class",
          "Race",
          "Background",
          "Ability Scores",
          "Skills",
          "Feats",
          "Retraining",
        ].map((subtab) => (
          <button key={subtab} className="bg-red-800 px-4 py-2 rounded text-sm">
            {subtab}
          </button>
        ))}
      </div>
      <div className="bg-yellow-100 bg-opacity-20 p-4 rounded">
        <h2 className="mb-2">Please select your class:</h2>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            "Artificer",
            "Barbarian",
            "Bard",
            "Cleric",
            "Druid",
            "Fighter",
            "Monk",
            "Paladin",
            "Ranger",
            "Rogue",
            "Sorcerer",
            "Warlock",
            "Wizard",
          ].map((className) => (
            <button key={className} className="bg-gray-700 p-2 rounded">
              {className}
            </button>
          ))}
        </div>
        <button className="bg-blue-500 px-4 py-2 rounded">Equipment</button>
      </div>
      <div className="mt-4 bg-yellow-100 bg-opacity-20 p-4 rounded">
        <h3 className="font-bold mb-2">Build Checklist</h3>
        <ul className="list-disc list-inside">
          <li>Druid</li>
          <li>Choose a race</li>
          <li>Choose a background</li>
          <li>Ability scores chosen</li>
        </ul>
      </div>
    </>
  );
}

export default Builder;
