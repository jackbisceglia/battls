import React from 'react'

import FormBox from './FormBox'

import '../Styles/landingStyles.css';
import { Grid } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../Reducers';

const LandingMain: React.FC = () => {
    const auth = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    
    return (
        <div className="main">
            <Grid fluid centered stackable>
                <Grid.Row>
                    <Grid.Column stretched textAlign="center" largeScreen={16} computer={16} mobile={12} >
                        <FormBox />
                        <button onClick={() => console.log(auth.id, auth.authorized)}>See State</button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
        </div>
    )
}

export default LandingMain;
