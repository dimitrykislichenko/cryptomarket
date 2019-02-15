import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react-native';

import { CenteredContent } from '../../../storybook';
import * as CryptoIcon from '../CryptoIcon';

const Wrapper = styled.View`
    display: flex;
`;

const StyledImage = styled.Image`
    width: 32px;
    height: 32px;
    flex: 0 0 auto;
    justify-content: center;
`;

storiesOf('common/CryptoIcon', module)
    .addDecorator(story => <CenteredContent story={story()} />)
    .add('default', () => (
        <Wrapper>
            <StyledImage source={CryptoIcon['ADA']} />
            <StyledImage source={CryptoIcon['BCH']} />
            <StyledImage source={CryptoIcon['BSV']} />
            <StyledImage source={CryptoIcon['BTC']} />
            <StyledImage source={CryptoIcon['DASH']} />
            <StyledImage source={CryptoIcon['EOS']} />
            <StyledImage source={CryptoIcon['GNO']} />
            <StyledImage source={CryptoIcon['QTUM']} />
            <StyledImage source={CryptoIcon['USDT']} />
            <StyledImage source={CryptoIcon['XETC']} />
            <StyledImage source={CryptoIcon['XETH']} />
            <StyledImage source={CryptoIcon['XLTC']} />
            <StyledImage source={CryptoIcon['XMLN']} />
            <StyledImage source={CryptoIcon['XRP']} />
            <StyledImage source={CryptoIcon['XREP']} />
            <StyledImage source={CryptoIcon['XTZ']} />
            <StyledImage source={CryptoIcon['XXBT']} />
            <StyledImage source={CryptoIcon['XXDG']} />
            <StyledImage source={CryptoIcon['ZEC']} />
            <StyledImage source={CryptoIcon['XLM']} />
            <StyledImage source={CryptoIcon['XMR']} />
        </Wrapper>
    ));
