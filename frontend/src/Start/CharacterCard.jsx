import {Card, Button} from '@mantine/core'

function CharacterCard(props){

    return (
        <Card w={"35%"} key={props.character._id}>
        <h4>{props.character.name}</h4>
        <p>{props.character.class}</p>
        <p>{props.character.background}</p>
        <Button onClick={()=>props.load(props.character)} my=".5rem" mx=".5rem" h="1rem" size="compact-xs"type="button">Load</Button>
        <Button onClick={()=>props.delete(props.id)} my=".5rem" mx=".5rem" h="1rem" size="compact-xs"type="button">Delete</Button>
        </Card>)}

export default CharacterCard