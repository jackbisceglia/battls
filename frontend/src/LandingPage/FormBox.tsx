import React, { useState } from 'react'
import { Grid, Button, Modal, Form, Select, Checkbox, Card} from 'semantic-ui-react'


const FormBox: React.FC = () => {
    const [isOnLogin, setIsOnLogin] = useState(true);
    
    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none'
    }

    return (
        <Card size="huge">
            <Card.Content textAlign="center">
                <Card.Header style={{fontSize: '1.75rem'}}>Battls</Card.Header>
                <Card.Meta>Vote. Post. Repeat.</Card.Meta>
            </Card.Content>
            <Card.Content textAlign="center">
                <Form >
                    <Form.Field>
                        <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Username or Email</label>
                        <input type={"email" || "username"}/>
                    </Form.Field>
                    <Form.Field>
                        <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Password</label>
                        <input type={"password"}/>
                    </Form.Field>
                    <Button primary={isOnLogin} style={{margin: '.45rem .1rem', width: '40%'}} size="mini" type='submit'>Login</Button>
                </Form>
            </Card.Content>
            <Card.Content extra>No Account?</Card.Content>
        </Card>

    )
}


export default FormBox;
