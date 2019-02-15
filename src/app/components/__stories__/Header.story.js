import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import Header from '../Header';

storiesOf('app/Header', module).add('default', () => <Header />);
