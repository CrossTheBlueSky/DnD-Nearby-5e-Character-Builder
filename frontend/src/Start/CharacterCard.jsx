import {Card, Button, Stack} from '@mantine/core'

function CharacterCard(props){

    return (
        <Card style={{backgroundColor: "#16425B"}} c="#BFAE48" w={"45%"}  my="1.5rem" key={props.character._id}>
        <h6 style={{marginTop : "0"}}>{props.character.name}</h6>
        <Stack mb="4rem" gap="xs">
        <span>{props.character.class}</span>
        <span>{props.character.race}</span>
        <span>{props.character.background}</span>
        </Stack>

        <div style={{position: "absolute",  bottom : "0"}}>
        <Button onClick={()=>props.load(props.character)} my=".5rem" mx=".5rem" h="1rem" size="compact-xs"type="button">Load</Button>
        <Button onClick={()=>props.delete(props.id)} my=".5rem" mx=".5rem" h="1rem" size="compact-xs"type="button">Delete</Button>
        </div>

        </Card>)}

export default CharacterCard