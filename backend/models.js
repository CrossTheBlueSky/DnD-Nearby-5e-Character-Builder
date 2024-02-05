const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const data = require('../data/class/class-artificer.json');

const classSchema = new Schema({

        "name": {
          "type": "String"
        },
        "source": {
          "type": "String"
        },
        "page": {
          "type": "Number"
        },
        "otherSources": {
          "type": [
            "Mixed"
          ]
        },
        "hd": {
          "number": {
            "type": "Number"
          },
          "faces": {
            "type": "Number"
          }
        },
        "proficiency": {
          "type": [
            "String"
          ]
        },
        "spellcastingAbility": {
          "type": "String"
        },
        "casterProgression": {
          "type": "String"
        },
        "preparedSpells": {
          "type": "String"
        },
        "cantripProgression": {
          "type": [
            "Number"
          ]
        },
        "optionalfeatureProgression": {
          "type": [
            "Mixed"
          ]
        },
        "startingProficiencies": {
          "armor": {
            "type": [
              "String"
            ]
          },
          "weapons": {
            "type": [
              "Mixed"
            ]
          },
          "tools": {
            "type": [
              "String"
            ]
          },
          "toolProficiencies": {
            "type": [
              "Mixed"
            ]
          },
          "skills": {
            "type": [
              "Mixed"
            ]
          }
        },
        "startingEquipment": {
          "additionalFromBackground": {
            "type": "Boolean"
          },
          "default": {
            "type": [
              "String"
            ]
          },
          "goldAlternative": {
            "type": "String"
          },
          "defaultData": {
            "type": [
              "Mixed"
            ]
          }
        },
        "multiclassing": {
          "requirements": {
            "int": {
              "type": "Number"
            }
          },
          "proficienciesGained": {
            "armor": {
              "type": [
                "String"
              ]
            },
            "tools": {
              "type": [
                "String"
              ]
            },
            "toolProficiencies": {
              "type": [
                "Mixed"
              ]
            }
          }
        },
        "classTableGroups": {
          "type": [
            "Mixed"
          ]
        },
        "classFeatures": {
          "type": [
            "Mixed"
          ]
        },
        "subclassTitle": {
          "type": "String"
        },
        "fluff": {
          "type": [
            "Mixed"
          ]
        },
        "subclass": {
          "type": [
            "Mixed"
          ]
        },
        "classFeature": {
          "type": [
            "Mixed"
          ]
        },
        "subclassFeature": {
          "type": [
            "Mixed"
          ]
        }
        });

        const Class = mongoose.model('Class', classSchema);

        const artificer = new Class(data)
        artificer.save()