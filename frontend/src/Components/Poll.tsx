import React from 'react'

import PollOption from './PollOption'
import { Card, Button, Image, Progress} from 'semantic-ui-react'

import '../Styles/polls.css'
  
const namesTooLong = (name1: string, name2: string ) => {

}

// Passed Props
interface Props {
    pollOptions: pollOptions
}

// Define pollOptions Object
interface pollOptions {
    optionOne: string,
    optionTwo: string
} 

const Poll: React.FC<Props> = ({
    pollOptions
}) => {
    let optionOne: string = pollOptions.optionOne;
    let optionTwo: string = pollOptions.optionTwo;

    return (
        <Card style={{width: "28%"}} center>
            <Card.Content >
                <Card.Header>{optionOne} vs. {optionTwo}</Card.Header>
                <Card.Meta>Jack Bisceglia</Card.Meta>
            </Card.Content>
            <Card.Content>
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
