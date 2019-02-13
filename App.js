import React from 'react';

import App from './src/app';
import Storybook from './storybook';

const Root = () => {
    if (process.env.STORYBOOK) {
        return <Storybook />;
    } else {
        return <App />;
    }
};
