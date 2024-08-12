import React from 'react';

function CharacterPreview(){

    return (
        <>
        <div className="mb-4">
          <div className="text-center bg-gray-800 py-1 rounded">UNNAMED CHARACTER</div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-4">
          {['HP', 'STR', 'SPEED', 'DEX', 'INIT', 'CON', 'AC', 'INT', 'WIS', 'CHA'].map((stat) => (
            <div key={stat} className="bg-gray-800 p-2 rounded text-center">
              {stat}: 10
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <button className="w-full bg-blue-500 p-2 rounded">Feats</button>
          <button className="w-full bg-blue-500 p-2 rounded">Skills</button>
          <button className="w-full bg-red-500 p-2 rounded mt-4">Save Character</button>
          <button className="w-full bg-red-500 p-2 rounded">Save As New Character</button>
        </div>
        </>
    )
}

export default CharacterPreview