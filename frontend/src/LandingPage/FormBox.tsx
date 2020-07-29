import React, { useState } from 'react'
import { useHistory} from 'react-router-dom';
import { Grid, Button, Modal, Form, Select, Checkbox, Card} from 'semantic-ui-react'

import '../Styles/landingStyles.css';

// Redux
import { useSelector, useDispatch} from 'react-redux'
import { RootState } from '../Reducers'
import { setAuth } from '../Reducers/Slices/Auth';
import { withRouter } from 'react-router-dom';

const FormBox: React.FC = () => {
    const history = useHistory();
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    const [login, setLogin] = useState(true);
    
    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none'
    }

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAuth('000'))
    }

    const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setAuth('000'))
    }

    return (
        <Card size="huge">
            <Card.Content textAlign="center">
                <Card.Header style={{fontSize: '1.75rem', color: '#1F82CD'}}>Battls</Card.Header>
                <Card.Meta>Vote. Post. Repeat.</Card.Meta>
            </Card.Content>
            <Card.Content textAlign="center">
                {login 
                    ?
                    // LOGIN FORM
                        <Form onSubmit={(event) => handleLogin(event)}>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Username or Email</label>
                                <input type={"email" || "username"}/>
                            </Form.Field>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Password</label>
                                <input type={"password"}/>
                            </Form.Field>
                            <Button primary style={{margin: '.45rem .1rem', width: '40%'}} size="mini" type='submit'>Login</Button>
                        </Form>
                    :
                    // SIGN UP FORM
                        <Form onSubmit={(event) => handleSignUp(event)}>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Email</label>
                                <input type={"email"} placeholder="example@example.com"/>
                            </Form.Field>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Username</label>
                                <input placeholder="example123"/>
                            </Form.Field>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Password</label>
                                <input type={"password"} placeholder="password"/>
                            </Form.Field>
                            <Form.Field>
                                <label style={{fontSize: '.8rem', fontWeight: 'normal'}}>Confirm Password</label>
                                <input type={"password"} placeholder="password"/>
                            </Form.Field>
                            <Button secondary style={{margin: '.45rem .1rem', width: '40%'}} size="mini" type='submit'>Create Account</Button>
                        </Form>
                }
            </Card.Content>
            <Card.Content extra>
                <p className="sign-up">{login ? "No Account?" : "Already have an account?"} <span onClick={() => setLogin(!login)}>{login ? "Sign Up" : "Login"}</span></p>
            </Card.Content>
        </Card>

    )
}


export default FormBox;
