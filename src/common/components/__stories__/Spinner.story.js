import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { CenteredContent } from '../../../storybook';
import Spinner from '../Spinner';

storiesOf('common/Spinner', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Spinner />);
