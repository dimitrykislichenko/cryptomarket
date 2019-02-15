import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import TradesChart from '../TradesChart';
import { Trades } from './fixtures';

storiesOf('app/TradesChart', module).add('default', () => <TradesChart data={Trades} />);
