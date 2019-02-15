import React from 'react';
import styled from 'styled-components';
import { compose, withStateHandlers } from 'recompose';
import { get } from 'lodash';
import { ListItem } from 'react-native-elements';
import * as Icons from '../../common/components/CryptoIcon';

import { Asset } from '../../types/Asset';
import Label from '../../common/components/Label';
import TradesChart from '../containers/TradesChart';

interface AssetListItemProps {
    asset: Asset;
    showChart: boolean;
    onToggleChart: () => any;
}

const Wrapper = styled.View``;

const Price = styled.Text`
    font-size: 12px;
`;

const Subtitle = styled.View`
    font-size: 10px;
    display: flex;
    flex-direction: row;
`;

const AssetListItem = ({ asset, showChart, onToggleChart }: AssetListItemProps) => (
    <Wrapper>
        <ListItem
            onPress={onToggleChart}
            title={asset.wsname}
            subtitle={() => (
                <Subtitle>
                    <Label>{`L:${get(asset, 'l.1')}`}</Label>
                    <Label>{`H:${get(asset, 'h.1')}`}</Label>
                </Subtitle>
            )}
            rightTitle={<Price>{get(asset, 'a.0')}</Price>}
            leftAvatar={{ source: Icons[asset.base] }}
            topDivider
            chevron
        />

        {showChart && <TradesChart pair={asset.altname} />}
    </Wrapper>
);

const withChart = withStateHandlers(
    { showChart: false },
    {
        onToggleChart: ({ showChart }: { showChart: boolean }) => () => ({
            showChart: !showChart,
        }),
    },
);

export default compose(withChart)(AssetListItem);
