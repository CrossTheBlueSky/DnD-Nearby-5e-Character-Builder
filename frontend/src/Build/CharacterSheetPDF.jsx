import { PDFDocument } from 'pdf-lib'
import { useRef } from 'react'
import {useSelector} from 'react-redux'
import React from 'react'

function CharacterSheetPDF(){

  const abilityScores = useSelector((state) => state.abilityScores.abilityScores)
  const background = useSelector((state) => state.background.background)
  const race = useSelector((state) => state.race.race)
  const characterClass = useSelector((state) => state.class.class)
  const feats = useSelector((state) => state.feats.feats)
  const skills = useSelector((state) => state.skills.skills)

  const [pdfInfo, setPdfInfo] = React.useState(null)

  React.useEffect(() => {
    fillForm()
  },[abilityScores])



async function fillForm() {
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




// Target fields by their names

console.log(abilityScores)
const IntField = form.getTextField('INT')

const WisField = form.getTextField('WIS')
const ChaField = form.getTextField('CHA')
const StrField = form.getTextField('STR')
const DexField = form.getTextField('DEX')
const ConField = form.getTextField('CON')
const NameField1 = form.getTextField('CharacterName')
const BackgroundField = form.getTextField('Background')
//const RaceField = form.getTextField('Race')
const ClassField = form.getTextField('ClassLevel')
const ProficiencyField = form.getTextField('ProfBonus')


IntField.setText(`${abilityScores.intelligence}`)
WisField.setText(`${abilityScores.wisdom}`)
ChaField.setText(`${abilityScores.charisma}`)
StrField.setText(`${abilityScores.strength}`)
DexField.setText(`${abilityScores.dexterity}`)
ConField.setText(`${abilityScores.constitution}`)
NameField1.setText('Test Character')
BackgroundField.setText(`${background}`)
//RaceField.setText(`${race}`)
ClassField.setText(`${characterClass} 1`)
ProficiencyField.setText('2')




  const pdfBytes = await pdfDoc.save()

  const docUrl = URL.createObjectURL(new Blob([pdfBytes], {type: 'application/pdf'}))
  setPdfInfo(docUrl);

}



  
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