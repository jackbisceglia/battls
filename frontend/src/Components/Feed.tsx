// React Imports
import React from 'react'

// Semantic UI Imports
import { Grid } from 'semantic-ui-react'

// Component Imports
import Poll from './Poll'

// Interface Imports
import { PollData } from '../Interfaces/PollData'

// Redux Imports
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../Reducers'


interface Props {
    pollList: PollData[]
}

const Feed: React.FC<Props> = ({
    pollList
}) => {
    const dispatch = useDispatch();

    return (
        <>
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

