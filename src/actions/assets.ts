/**
 * Make an API call to fetch assets
 */
export const fetchAssets = () => ({
    type: 'FETCH_ASSETS',
});

/**
 * Assets were successfully fetched
 *
 * @param data - Assets data
 */
export const fetchAssetsSuccess = data => ({
    type: 'FETCH_ASSETS_SUCCESS',
    data,
});

/**
 * Failed to fetch assets
 *
 * @param error - Explanation error
 */
export const fetchAssetsError = error => ({
    type: 'FETCH_ASSETS_ERROR',
    error,
});
