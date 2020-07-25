import React from 'react'

import FormBox from './FormBox'

import '../Styles/landingStyles.css';
import { Grid } from 'semantic-ui-react';

const LandingMain: React.FC = () => {
    return (
        <div className="main">
            <Grid fluid centered stackable>
                <Grid.Row>
                    <Grid.Column stretched textAlign="center" largeScreen={16} computer={16} mobile={12} >
                        <FormBox />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default LandingMain;
