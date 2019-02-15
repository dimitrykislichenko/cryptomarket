import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import AssetListItem from '../AssetListItem';

import { AssetPair } from './fixtures';

storiesOf('app/AssetListItem', module).add('default', () => <AssetListItem asset={AssetPair} />);
