import React from 'React';
import { compose, branch, renderComponent } from 'recompose';
import { FlatList } from 'react-native';

import Search from './Search';
import AssetListItem from './AssetListItem';

import { Spinner, ErrorMessage } from '../../common';
import { Asset } from '../../types/Asset';

export interface AssetListProps {
    data: [Asset];
}

export interface ErrorProps {
    error: string;
}

export interface LoadingProps {
    loading: boolean;
}

const AssetList = ({ data }: AssetListProps) => (
    <FlatList
        data={data}
        keyExtractor={item => item.wsname}
        renderItem={({ item }) => <AssetListItem asset={item} />}
        initialNumToRender={12}
        maxToRenderPerBatch={5}
    />
);

// Show spinner while loading data from API
const withSpinner = branch(
    ({ loading }: LoadingProps) => loading,
    renderComponent(() => <Spinner size="large" />),
);

const withError = branch(
    ({ error }: ErrorProps) => error !== null,
    renderComponent(({ error }: ErrorProps) => <ErrorMessage message={error} />),
);

export default compose(
    withSpinner,
    withError,
)(AssetList);
