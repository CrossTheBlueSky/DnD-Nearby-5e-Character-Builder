import { PDFDocument } from 'pdf-lib'
import { useRef } from 'react'
import {useSelector} from 'react-redux'
import React from 'react'
import { Button } from '@mantine/core'

let docUrl
let pdfBytes

function CharacterSheetPDF(){

  const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
  const background = useSelector((state) => state.background.background)
  const selectedRace = useSelector((state) => state.race.race)
  const characterClass = useSelector((state) => state.class.class)
  const feats = useSelector((state) => state.feats.feats)
  const skills = useSelector((state) => state.skills.skills)
  const details = useSelector((state) => state.details.details)
  const allClassData = useSelector((state) => state.allClassData.classes)
  const allRaceData = useSelector((state) => state.allRaceData.races)
  let selectedClassDetails
  let selectedRaceDetails

  const profValue = 2
  // const profValue = Math.ceil(level/4) + 1

  const [pdfInfo, setPdfInfo] = React.useState(null)

  React.useEffect(() => {
    if(selectedRace){
       selectedRaceDetails = allRaceData[0].race.filter((raceOption)=> raceOption.name + " (" + raceOption.source + ")" === selectedRace)
    }
    if(characterClass){
       selectedClassDetails =allClassData.filter((classOption) => classOption.class[0].name === characterClass)
    }
    fillForm()
  },[abilityScores, characterClass, selectedRace])


async function fillForm() {


  if(!selectedClassDetails || !selectedRaceDetails){
    return
  }

//  const formUrl = 'https://media.wizards.com/2022/dnd/downloads/DnD_5E_CharacterSheet_FormFillable.pdf'
const formUrl = './src/Build/DnD_5E_CharacterSheet_FormFillable.pdf'
  

  const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())

  // Load a PDF with form fields
  const pdfDoc = await PDFDocument.load(formPdfBytes)
  
// Embed  images (they used mario for this example)
        //   const marioImage = await pdfDoc.embedPng(marioImageBytes)
        //   const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
        //   const marioImage = await pdfDoc.embedPng(marioImageBytes)
        //   const emblemImage = await pdfDoc.embedPng(emblemImageBytes)
  
  // Get the form containing all the fields
  const form = pdfDoc.getForm()

  //This gets the fields and then logs all of their names and types
        // const fields = form.getFields()
        // fields.forEach(field => {
        //   const type = field.constructor.name
        //   const name = field.getName()
        //   console.log(`${type}: ${name}`)
        //   })




//Ability Score and Modifier Fields

const IntField = form.getTextField('INT')
const IntMod = form.getTextField('INTmod')
const WisField = form.getTextField('WIS')
const WisMod = form.getTextField('WISmod')
const ChaField = form.getTextField('CHA')
const ChaMod = form.getTextField('CHamod')
const StrField = form.getTextField('STR')
const StrMod = form.getTextField('STRmod')
const DexField = form.getTextField('DEX')
const DexMod = form.getTextField('DEXmod ')
const ConField = form.getTextField('CON')
const ConMod = form.getTextField('CONmod')

//Character Info and Detail Fields
const NameField1 = form.getTextField('CharacterName')
const BackgroundField = form.getTextField('Background')
const RaceField = form.getTextField('Race ')
const ClassField = form.getTextField('ClassLevel')
const ProficiencyField = form.getTextField('ProfBonus')
const AlignmentField = form.getTextField('Alignment')
const ExperienceField = form.getTextField('XP')
const PlayerNameField = form.getTextField('PlayerName')
const AgeField = form.getTextField('Age')
const HeightField = form.getTextField('Height')
const WeightField = form.getTextField('Weight')
const EyesField = form.getTextField('Eyes')
const SkinField = form.getTextField('Skin')
const HairField = form.getTextField('Hair')

//Saving Throw Fields
const StrSaveField = form.getTextField('ST Strength')
const DexSaveField = form.getTextField('ST Dexterity')
const ConSaveField = form.getTextField('ST Constitution')
const IntSaveField = form.getTextField('ST Intelligence')
const WisSaveField = form.getTextField('ST Wisdom')
const ChaSaveField = form.getTextField('ST Charisma')

//Filling Saving Throw Fields

StrSaveField.setText(`${findModifier(abilityScores.strength)}`)
DexSaveField.setText(`${findModifier(abilityScores.dexterity)}`)
ConSaveField.setText(`${findModifier(abilityScores.constitution)}`)
IntSaveField.setText(`${findModifier(abilityScores.intelligence)}`)
WisSaveField.setText(`${findModifier(abilityScores.wisdom)}`)
ChaSaveField.setText(`${findModifier(abilityScores.charisma)}`)



//Saving Throw Proficiency Fields
const StrSaveCheck = form.getCheckBox('Check Box 11')
const DexSaveCheck = form.getCheckBox('Check Box 18')
const ConSaveCheck = form.getCheckBox('Check Box 19')
const IntSaveCheck = form.getCheckBox('Check Box 20')
const WisSaveCheck = form.getCheckBox('Check Box 21')
const ChaSaveCheck = form.getCheckBox('Check Box 22')

//Filling Saving Throw Proficiency Checkboxes

  
  selectedClassDetails[0].class[0].proficiency.forEach((prof) => {
 
  if(prof === 'str'){
    StrSaveCheck.check()
    StrSaveField.setText(`${parseInt(StrSaveField.getText())+profValue}`)
  } else if(prof === 'dex'){
    DexSaveCheck.check()
    DexSaveField.setText(`${parseInt(DexSaveField.getText())+profValue}`)
  } else if(prof === 'con'){
    ConSaveCheck.check()
    ConSaveField.setText(`${parseInt(ConSaveField.getText())+profValue}`)
  } else if(prof === 'int'){
    IntSaveCheck.check()
    IntSaveField.setText(`${parseInt(IntSaveField.getText())+profValue}`)
  } else if(prof === 'wis'){
    WisSaveCheck.check()
    WisSaveField.setText(`${parseInt(WisSaveField.getText())+profValue}`)
  } else if(prof === 'cha'){
    ChaSaveCheck.check()
    ChaSaveField.setText(`${parseInt(ChaSaveField.getText())+profValue}`)
  }})



// AC, Initiative, Speed, HP
const MaxHPField = form.getTextField('HPMax')
const HitDiceField = form.getTextField('HD')
const AcField = form.getTextField('AC')
const InitiativeField = form.getTextField('Initiative')
const SpeedField = form.getTextField('Speed')

//Filling AC, Initiative, Speed, HP

const healthVal = selectedClassDetails[0].class[0].hd.faces + findModifier(abilityScores.constitution)
HitDiceField.setText(`${selectedClassDetails[0].class[0].hd.faces}`)
MaxHPField.setText(`${healthVal}`)
AcField.setText(`${10 + findModifier(abilityScores.dexterity)}`)
InitiativeField.setText(`${findModifier(abilityScores.dexterity)}`)
SpeedField.setText(`${selectedRaceDetails.speed}` || '30')

//Skill Fields

const skillFields = {
  Acrobatics: form.getTextField('Acrobatics'),
  AnimalHandling: form.getTextField('Animal'),
  Arcana: form.getTextField('Arcana'),
  Athletics: form.getTextField('Athletics'),
  Deception: form.getTextField('Deception '),
  History: form.getTextField('History '),
  Insight: form.getTextField('Insight'),
  Intimidation: form.getTextField('Intimidation'),
  Investigation: form.getTextField('Investigation '),
  Medicine: form.getTextField('Medicine'),
  Nature: form.getTextField('Nature'),
  Perception: form.getTextField('Perception '),
  Performance: form.getTextField('Performance'),
  Persuasion: form.getTextField('Persuasion'),
  Religion: form.getTextField('Religion'),
  SleightOfHand: form.getTextField('SleightofHand'),
  Stealth: form.getTextField('Stealth '),
  Survival: form.getTextField('Survival')

}

const skillMods = {
  Acrobatics: 'dexterity',
  AnimalHandling: 'wisdom',
  Arcana: 'intelligence',
  Athletics: 'strength',
  Deception: 'charisma',
  History: 'intelligence',
  Insight: 'wisdom',
  Intimidation: 'charisma',
  Investigation: 'intelligence',
  Medicine: 'wisdom',
  Nature: 'intelligence',
  Perception: 'wisdom',
  Performance: 'charisma',
  Persuasion: 'charisma',
  Religion: 'intelligence',
  SleightOfHand: 'dexterity',
  Stealth: 'dexterity',
  Survival: 'wisdom'
}

//Filling Skill Fields

function fillSkills(skill, prof){

  const mod = findModifier(abilityScores[skillMods[`${skill}`]])

  if (prof === true){
    const total = mod + 2
    skillFields[`${skill}`].setText(`${total}`)
  } else {
    skillFields[`${skill}`].setText(`${mod}`)
  
  }
}

const allSkills = Object.keys(skillFields)
allSkills.forEach(fillSkills, false)
skills.forEach(fillSkills, true)

//Testing all the checkboxes (BRUUUUUUUH)

/*~~~~~~~~~~~~~CHECKBOX KEY~~~~~~~~~~~~~~~
Check Box 11: Str Save Proficiency
Check Box 12-14: Death Save Successes
Check Box 15-17: Death Save Failures
Check Box 18: Dex Save Proficiency
Check Box 19: Con Save Proficiency
Check Box 20: Int Save Proficiency
Check Box 21: Wis Save Proficiency
Check Box 22: Cha Save Proficiency


Check Box 23: Acrobatics Proficiency
Check Box 24: Animal Handling Proficiency
Check Box 25: Arcana Proficiency
Check Box 26: Athletics Proficiency
Check Box 27: Deception Proficiency
Check Box 28: History Proficiency
Check Box 29: Insight Proficiency
Check Box 30: Intimidation Proficiency
Check Box 31: Investigation Proficiency
Check Box 32: Medicine Proficiency
Check Box 33: Nature Proficiency
Check Box 34: Perception Proficiency
Check Box 35: Performance Proficiency
Check Box 36: Persuasion Proficiency
Check Box 37: Religion Proficiency
Check Box 38: Sleight of Hand Proficiency
Check Box 39: Stealth Proficiency
Check Box 40: Survival Proficiency

*/


//Checkbox Testing
// const CheckBoxTest = form.getCheckBox('Check Box 11')
// CheckBoxTest.check()

//Fill in Character Info
if(details){
NameField1.setText(details.name)
AlignmentField.setText(details.alignment)
ExperienceField.setText('250')
PlayerNameField.setText(details.player)
AgeField.setText(details.age)
HeightField.setText(details.height)
WeightField.setText(details.weight)
EyesField.setText(details.eyes)
SkinField.setText(details.skin)
HairField.setText(details.hair)
}


//Fill in Ability Scores
IntField.setText(`${abilityScores.intelligence}`)
WisField.setText(`${abilityScores.wisdom}`)
ChaField.setText(`${abilityScores.charisma}`)
StrField.setText(`${abilityScores.strength}`)
DexField.setText(`${abilityScores.dexterity}`)
ConField.setText(`${abilityScores.constitution}`)

//Fill in Ability Modifiers

function findModifier(score){
  let modifier = Math.floor((score - 10) / 2)
  return modifier

}

IntMod.setText(`${findModifier(abilityScores.intelligence)}`)
WisMod.setText(`${findModifier(abilityScores.wisdom)}`)
ChaMod.setText(`${findModifier(abilityScores.charisma)}`)
StrMod.setText(`${findModifier(abilityScores.strength)}`)
DexMod.setText(`${findModifier(abilityScores.dexterity)}`)
ConMod.setText(`${findModifier(abilityScores.constitution)}`)




BackgroundField.setText(`${background}`)
RaceField.setText(`${selectedRace}`)
ClassField.setText(`${characterClass} 1`)
ProficiencyField.setText(`${profValue}`)





pdfBytes = await pdfDoc.save()

docUrl = URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}))
setPdfInfo(docUrl);
  

}



function downloadHandler(){
  const link = document.createElement("a");
  link.href = docUrl
  link.download = "myFileName.pdf";
  link.click();
  }





  // return (
  //   <Button variant="gradient"
  //                   gradient={{ from: 'rgba(105, 1, 1, 1)', to: 'red', deg: 360 }}
  //                   align="center" my="0" py="0" fz=".6rem" size="compact-sm" onClick={downloadHandler}>Save Character Sheet</Button>
  // )
  return <iframe title="test" src={pdfInfo} ref={useRef(null)}type="application/pdf" />
  // return <a href="./src/Build/DnD_5E_CharacterSheet_FormFillable.pdf" type="application/pdf" target="_blank">Download Character Sheet</a>
}
export default CharacterSheetPDF

//   const nameField = form.getTextField('CharacterName')
//   const ageField = form.getTextField('Age')
//   const heightField = form.getTextField('Height')
//   const weightField = form.getTextField('Weight')
//   const eyesField = form.getTextField('Eyes')
//   const skinField = form.getTextField('Skin')
//   const hairField = form.getTextField('Hair')
  
//   const alliesField = form.getTextField('Allies')
//   const factionField = form.getTextField('FactionName')
//   const backstoryField = form.getTextField('Backstory')
//   const traitsField = form.getTextField('Feat+Traits')
//   const treasureField = form.getTextField('Treasure')
  
//   const characterImageField = form.getButton('CHARACTER IMAGE')
//   const factionImageField = form.getTextField('Faction Symbol Image')
  
//   // Fill in the basic info fields
//   nameField.setText('Mario')
//   ageField.setText('24 years')
//   heightField.setText(`5' 1"`)
//   weightField.setText('196 lbs')
//   eyesField.setText('blue')
//   skinField.setText('white')
//   hairField.setText('brown')
  
//   // Fill the character image field with our Mario image
//   characterImageField.setImage(marioImage)
  
//   // Fill in the allies field
//   alliesField.setText(
//     [
//       `Allies:`,
//       `  • Princess Daisy`,
//       `  • Princess Peach`,
//       `  • Rosalina`,
//       `  • Geno`,
//       `  • Luigi`,
//       `  • Donkey Kong`,
//       `  • Yoshi`,
//       `  • Diddy Kong`,
//       ``,
//       `Organizations:`,
//       `  • Italian Plumbers Association`,
//     ].join('\n'),
//   )
  
//   // Fill in the faction name field
//   factionField.setText(`Mario's Emblem`)
  
//   // Fill the faction image field with our emblem image
//   factionImageField.setImage(emblemImage)
  
//   // Fill in the backstory field
//   backstoryField.setText(
//     `Mario is a fictional character in the Mario video game franchise, owned by Nintendo and created by Japanese video game designer Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist of the series, Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center upon rescuing Princess Peach from the Koopa villain Bowser. His younger brother and sidekick is Luigi.`,
//   )
  
//   // Fill in the traits field
//   traitsField.setText(
//     [
//       `Mario can use three basic three power-ups:`,
//       `  • the Super Mushroom, which causes Mario to grow larger`,
//       `  • the Fire Flower, which allows Mario to throw fireballs`,
//       `  • the Starman, which gives Mario temporary invincibility`,
//     ].join('\n'),
//   )
  
//   // Fill in the treasure field
//   treasureField.setText(['• Gold coins', '• Treasure chests'].join('\n'))
  
//   // Serialize the PDFDocument to bytes (a Uint8Array)
//   const pdfBytes = await pdfDoc.save()
  
//   // For example, `pdfBytes` can be:
//   //   • Written to a file in Node
//   //   • Downloaded from the browser
//   //   • Rendered in an <iframe>