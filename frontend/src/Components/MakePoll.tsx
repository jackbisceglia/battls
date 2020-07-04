import React, { useState } from 'react'

import { Grid, Button, Modal, Form, Select} from 'semantic-ui-react'

const timeOptions = [
    { key: '1', text: '1 Day', value: '24' },
    { key: '2', text: '2 Days', value: '48' },
    { key: '3', text: '3 Day', value: '72' },
  ]

interface Props {
    placeholder: number
}

const MakePoll: React.FC<Props> = () => {
    const [makePostClicked, setMakePostClicked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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
        </Grid.Row>
        <Modal 
            open={makePostClicked}
            size="mini"
            dimmer={true}
            onClose={() => setMakePostClicked(false)}
        >
            <Modal.Header primary>
                Create A Poll
                <Button 
                    floated="right"
                    negative
                    size="tiny"
                    circular
                    onClick={() => setMakePostClicked(false)}
                >
                    <Button.Content>X</Button.Content>
                </Button>
            </Modal.Header>
            <Modal.Content>
        
            <Form loading={isLoading}>
                <Form.Input width={14} label='Option 1' placeholder='Enter a Contestant' />
                <Form.Input width={14} label='Option 2' placeholder='Enter a Contestant' />
                <Form.Group >
                    <Form.Field
                        floated="left"
                        control={Select}
                        options={timeOptions}
                        label={{ children: 'Time', htmlFor: 'form-select-control-time' }}
                        placeholder='Time'
                        search
                        // searchInput={{ id: 'form-select-control-gender' }}
                    />
                </Form.Group>
                <Button style={{margin: ".5rem 0"}}>Start a Battle</Button>
            </Form>
            </Modal.Content>
            <Modal.Description>
                <p style={{paddingBottom: "1rem", paddingLeft: "1rem", paddingRight: "1rem"}}>
                    Enter Options One and Two, and let your network vote to see who would win the battle!
                </p>
            </Modal.Description>
        </Modal>
        </>
    )
}

export default MakePoll;