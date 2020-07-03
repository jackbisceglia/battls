import React from 'react'

import { Menu, Segment } from 'semantic-ui-react'

import '../Styles/navbar.css'


export default function Navbar() {
    return (
            <Menu text-align="center" inverted borderless style={{borderRadius: '0', backgroundColor: '#1f2022', marginBottom: "3rem"}}>
                <Menu.Item  className="navBrand" as='h3' name="battls" font-weight="700"/>
                <Menu.Menu position="right">
                    <Menu.Item as='a' name='Home'/>
                    <Menu.Item as='a' name='Account'/>
                </Menu.Menu>
            </Menu>
    )
}
