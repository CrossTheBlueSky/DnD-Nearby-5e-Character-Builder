import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema({
    "character": {
      "basicInfo": {
        "name": "string",
        "race": "string",
        "startingClass": "string",
        "totalLevel": "integer",
        "background": "string",
        "alignment": "string",
        "experiencePoints": "integer"
      },
      "classes": [
        {
          "name": "string",
          "level": "integer",
          "subclass": "string"
        }
      ],
      "abilityScores": {
        "strength": "integer",
        "dexterity": "integer",
        "constitution": "integer",
        "intelligence": "integer",
        "wisdom": "integer",
        "charisma": "integer"
      },
      "derivedStats": {
        "armorClass": "integer",
        "initiative": "integer",
        "speed": "integer",
        "hitPointsMaximum": "integer",
        "hitPointsCurrent": "integer",
        "temporaryHitPoints": "integer",
        "hitDice": [
          {
            "dieType": "string",
            "total": "integer",
            "remaining": "integer"
          }
        ]
      },
      "proficiencies": {
        "savingThrows": ["string"],
        "skills": ["string"],
        "languages": ["string"],
        "tools": ["string"],
        "weapons": ["string"],
        "armor": ["string"]
      },
      "features": [
        {
          "name": "string",
          "source": "string",
          "description": "string",
          "level": "integer"
        }
      ],
      "equipment": [
        {
          "name": "string",
          "quantity": "integer",
          "weight": "float",
          "description": "string"
        }
      ],
      "spellcasting": [
        {
          "class": "string",
          "spellcastingAbility": "string",
          "spellSaveDC": "integer",
          "spellAttackBonus": "integer",
          "spellsKnown": "integer",
          "spellSlots": {
            "1st": "integer",
            "2nd": "integer",
            "3rd": "integer",
            "4th": "integer",
            "5th": "integer",
            "6th": "integer",
            "7th": "integer",
            "8th": "integer",
            "9th": "integer"
          }
        }
      ],
      "spells": [
        {
          "name": "string",
          "level": "integer",
          "school": "string",
          "castingTime": "string",
          "range": "string",
          "components": "string",
          "duration": "string",
          "description": "string",
          "source": "string"
        }
      ],
      "personalityTraits": {
        "traits": "string",
        "ideals": "string",
        "bonds": "string",
        "flaws": "string"
      },
      "appearance": {
        "age": "integer",
        "height": "string",
        "weight": "string",
        "eyes": "string",
        "skin": "string",
        "hair": "string"
      },
      "backstory": "string"
    }
  });
  
  export default mongoose.model('Character', CharacterSchema);