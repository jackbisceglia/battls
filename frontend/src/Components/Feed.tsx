// React Imports
import React from 'react'

// Semantic UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Poll from './Poll'

// Interface Imports
import { PollData } from '../Interfaces/PollData'

// Redux Imports


interface Props {
    pollList: PollData[]
}

const Feed: React.FC<Props> = ({
    pollList
}) => {
    return (
        <>
        <button onClick={() => console.log(pollList[0])}>see state</button>
        {
        pollList.map(curr => (
            <Grid.Row key={curr.id} centered stretched style={{marginBottom: '2.5rem'}} >
                <Grid.Column >
                    <Poll PollData={curr}/>
                </Grid.Column>
            </Grid.Row>
        ))
        }
        </>
    );
}

export default Feed;

