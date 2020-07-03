// React Imports
import React from 'react'

// Semantic UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Poll from './Poll'

interface Props {
    pollList: PollData[]
}

export interface PollData {
    optionOne: string,
    optionTwo: string,
}


const Feed: React.FC<Props> = ({
    pollList
}) => {
    return (
        <>
        {
        pollList.map(curr => (
            <Grid.Row centered stretched style={{marginBottom: '2.5rem'}} >
                <Grid.Column >
                    <Poll pollOptions={curr}/>
                </Grid.Column>
            </Grid.Row>
        ))
        }
        </>
    );
}

export default Feed;

