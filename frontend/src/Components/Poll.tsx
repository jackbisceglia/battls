// React Imports
import React from 'react'

// Component Imports
import PollOption from './PollOption'

// Semantic Imports
import { Card, Button, Image, Progress} from 'semantic-ui-react'

// Style Imports
import '../Styles/polls.css'
  
interface Props {
    pollOptions: pollOptions
}

// pollOptions Prop Interface
interface pollOptions {
    optionOne: string,
    optionTwo: string
} 

const Poll: React.FC<Props> = ({
    pollOptions
}) => {
    // Deconstruct pollOptions
    let optionOne: string = pollOptions.optionOne;
    let optionTwo: string = pollOptions.optionTwo;

    return (
        <Card centered fluid>
            <Card.Content >
                <Card.Header>{optionOne} vs. {optionTwo}</Card.Header>
                <Card.Meta>Jack Bisceglia</Card.Meta>
            </Card.Content>
            <Card.Content textAlign="center">
                <div className="pollCntr">
                    <PollOption optionName={optionOne} percent={69} isWinning={true} />
                    <PollOption optionName={optionTwo} percent={20} isWinning={false}/>
                </div>
            </Card.Content>
            <Card.Content textAlign="center" extra>
                <Button size="mini" className="vote-btn" basic color='blue'>
                    {optionOne}
                </Button>
                <Button size="mini" className="vote-btn" basic color='blue'>
                    {optionTwo}
                </Button>
            </Card.Content>
        </Card>

    );
}
  
  export default Poll;
