import {Box} from '@mantine/core'


function DescriptionPane(props){


        return(
            <Box style={{overflow: "scroll"}} h="100%" bg="transparent" className="description-pane">
                <h3>{props.heading}</h3>
                
                    {props.description}
                
            </Box>)
    
}

export default DescriptionPane