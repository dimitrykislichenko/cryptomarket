import { all } from 'redux-saga/effects';

import { watchFetchAssetsAsync } from './assets';
import { watchFetchTradesAsync } from './trades';

// Combine all sagas for starting them all together
export default function* rootSaga() {
    yield all([watchFetchAssetsAsync(), watchFetchTradesAsync()]);
}
