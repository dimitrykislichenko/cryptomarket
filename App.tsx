import React from 'react';

import App from './src/app';
import Storybook from './storybook';

console.disableYellowBox = true;

// Babel preset that should pass process.env.STORYBOOK
// doesn't work,  don't have time to figure out why, so
// just using const
const STORYBOOK: boolean = false;

const Root = () => {
    if (STORYBOOK) {
        return <Storybook />;
    } else {
        return <App />;
    }
};

export default Root;
