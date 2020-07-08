import React, { useState } from 'react'

// Semantic UI Imports
import { Grid, Button, Modal, Form, Select} from 'semantic-ui-react'

// Redux Imports
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../Reducers'

// Interface Imports
import { PollData } from '../Interfaces/PollData'

// Redux Imports
import {addPost, removePost} from '../Actions/Posts';

const timeOptions = [
    { key: '1', text: '1 Day', value: '24' },
    { key: '2', text: '2 Days', value: '48' },
    { key: '3', text: '3 Day', value: '72' },
  ]



// ___________________________________________________________________________________
interface Props {
    placeholder: number
}

const MakePoll: React.FC<Props> = () => {
    const dispatch = useDispatch();
    const polls = useSelector((state: RootState) => state.posts);

    const [makePostClicked, setMakePostClicked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [createPostError, setCreatePostError] = useState<string>('');
    const [currPostCreated, setCurrPostCreated] = useState<PollData>({
        id : polls.length + 1,
        optionOne: '',
        optionTwo: '',
        posterName: 'Jack Bisceglia',
        optionOneVotes: 0,
        optionTwoVotes: 0,
    })

    const reset = () =>{
        setMakePostClicked(false);
        setCreatePostError('');
        setCurrPostCreated({
            id : polls.length + 1,
            optionOne: '',
            optionTwo: '',
            posterName: 'Jack Bisceglia',
            optionOneVotes: 0,
            optionTwoVotes: 0,
        })

    }

    const postAdded = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (currPostCreated.optionOne !== '' && currPostCreated.optionTwo !== '') {
            dispatch(addPost(currPostCreated));
            setMakePostClicked(false)
            reset();
        }
        else {
            setCreatePostError('Both Options Must Have Names!')
        }


    }

    return (
        <>
        <Grid.Row>
            <Button 
                size="small" 
                primary
                circular 
                animated='fade'
                style={{width: "3.25rem", height: "3.25rem" }}
                onClick={() => setMakePostClicked(true)}
            >
                <Button.Content visible>+</Button.Content>
                <Button.Content hidden>Post</Button.Content>
            </Button>
            {/* <button onClick={(event) => {
                event.preventDefault();
                console.log(polls)
            }}>
                See Polls List
            </button> */}
        </Grid.Row>
        <Modal 
            open={makePostClicked}
            size="mini"
            dimmer={true}
            onClose={() => reset()}
        >
            <Modal.Header primary>
                Create A Poll
                <Button 
                    floated="right"
                    negative
                    size="tiny"
                    circular
                    onClick={() => {setMakePostClicked(false)}}
                >
                    <Button.Content>X</Button.Content>
                </Button>
            </Modal.Header>
            <Modal.Content>
        
            <Form loading={isLoading} onSubmit={(event) => {
                    postAdded(event);
                }}>
                <Form.Input width={14} label='Option 1' placeholder='Enter a Contestant' onChange={(event) => {
                    setCurrPostCreated({...currPostCreated, optionOne: event.target.value});
                }}/>
                <Form.Input width={14} label='Option 2' placeholder='Enter a Contestant' onChange={(event) => {
                    setCurrPostCreated({...currPostCreated, optionTwo: event.target.value});
                }}/>
                {/* <Form.Group >
                    <Form.Field
                        floated="left"
                        control={Select}
                        options={timeOptions}
                        label={{ children: 'Time', htmlFor: 'form-select-control-time' }}
                        placeholder='Time'
                        search
                    />
                </Form.Group> */}
                <Button style={{margin: ".5rem 0"}}>Start a Battle</Button>
            </Form>
            </Modal.Content>
            <Modal.Description>
                {createPostError === ''
                    ?
                    <p style={{paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem"}}>
                        Enter Options One and Two, and let your network vote to see who would win the battle!
                    </p>
                    :
                    <p style={{color: 'red', paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem"}}>
                        {createPostError}
                    </p>
                }
                

            </Modal.Description>
        </Modal>
        </>
    )
}

export default MakePoll;