import { connect } from 'react-redux';
import { compose, lifecycle, withProps } from 'recompose';
import { filter } from 'lodash';

import { fetchAssets } from '../../actions/assets';
import AssetList from '../components/AssetList';

/**
 * Make an API call to tech data when component is mounted
 */
const withFetchDataRequest = lifecycle({
    componentDidMount: function() {
        this.props.fetchAssets();
    },
});

/**
 * Filter assets that doesn't have wsname
 *
 * NOTE: Not sure what they are, so probably will need to resolve that
 * other way.
 */
const withFilter = withProps(({ data }) => {
    const filteredAssets = filter(data, asset => asset.wsname !== undefined);
    return { data: filteredAssets };
});

export default compose(
    connect(
        ({ assets }) => assets,
        { fetchAssets },
    ),
    withFetchDataRequest,
    withFilter,
)(AssetList);
