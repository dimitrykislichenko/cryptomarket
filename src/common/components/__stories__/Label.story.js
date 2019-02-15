import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';

import { CenteredContent } from '../../../storybook';
import Label from '../Label';

storiesOf('common/Label', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => <Label>Label</Label>);
