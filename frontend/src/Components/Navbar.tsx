// React Imports
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

// Semantic UI Imports
import { Dropdown, Menu, Segment } from 'semantic-ui-react'
import { RootState } from '../Reducers';
import { updateAuth } from '../Reducers/Slices/Auth';

// Style Imports
import '../Styles/navbar.css'


export default function Navbar() {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    
    // **Modify
    const signOut = () => {
        dispatch(updateAuth({
            id: null,
            authorized: false
        }))
    }

    return (
            <Menu fluid text-align="center" inverted borderless style={{borderRadius: '0', backgroundColor: '#1f2022', marginBottom: '2.5rem'}}>
                <Menu.Item  className="navBrand" as='h3' name="battls" fontWeight="700"/>
                <Menu.Menu style={{marginRight: '2rem'}} position="right" fluid>
                    <Menu.Item as='a' name='Home'/>
                    <Dropdown item text='Account'>
                        <Dropdown.Menu>
                            <Dropdown.Item disabled>Settings</Dropdown.Item>
                            <Dropdown.Item disabled>Stats</Dropdown.Item>
                            <Dropdown.Item onClick={() => signOut()}>Signout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>
    )
}
