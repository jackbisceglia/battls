// React Imports
import React from 'react'

// Semantic UI Imports
import { Menu, Segment } from 'semantic-ui-react'

// Style Imports
import '../Styles/navbar.css'


export default function Navbar() {
    return (
            <Menu fluid text-align="center" inverted borderless style={{borderRadius: '0', backgroundColor: '#1f2022', marginBottom: '2.5rem'}}>
                <Menu.Item  className="navBrand" as='h3' name="battls" fontWeight="700"/>
                <Menu.Menu position="right" fluid>
                    <Menu.Item as='a' name='Home'/>
                    <Menu.Item as='a' name='Account'/>
                </Menu.Menu>
            </Menu>
    )
}
