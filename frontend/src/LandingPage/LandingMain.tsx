import React from 'react'

import FormBox from './FormBox'

import '../Styles/landingStyles.css';
import { Grid } from 'semantic-ui-react';

const LandingMain: React.FC = () => {
    return (
        <div className="main">
            <Grid fluid centered stackable>
                <Grid.Row columns={1}>
                    <Grid.Column stretched textAlign="center" computer={16} mobile={12} >
                        <FormBox />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default LandingMain;
