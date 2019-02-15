import React from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { ReduxProvider } from '../../providers';

import Header from './Header';
import AssetList from '../containers/AssetList';

const App = () => (
    <ReduxProvider>
        <ThemeProvider>
            <Header />
            <AssetList />
        </ThemeProvider>
    </ReduxProvider>
);

export default App;
