import {Container} from '@mantine/core'


function DescriptionPane(props){


        return(
            <Container style={{overflow: "scroll"}} h="100%" bg="transparent" className="description-pane">
                <h3 style={{margin: "0"}}>{props.heading}</h3>
                
                    {props.description}
                
            </Container>)
    
}

export default DescriptionPane