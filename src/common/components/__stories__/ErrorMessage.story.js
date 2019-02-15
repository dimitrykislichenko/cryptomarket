import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { CenteredContent } from '../../../storybook';
import ErrorMessage from '../ErrorMessage';

storiesOf('common/ErrorMessage', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <ErrorMessage message="Error: Something wrong" />);
