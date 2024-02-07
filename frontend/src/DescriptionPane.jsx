import {Box} from '@mantine/core'


function DescriptionPane(props){


        return(
            <Box h="100%" bg="violet.9" className="description-pane">
                <h3>{props.heading}</h3>
                <p>
                    {props.description}
                </p>
            </Box>)
    
}

export default DescriptionPane