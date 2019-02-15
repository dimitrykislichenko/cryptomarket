const initialState = {
    error: null,
    loading: false,
    assets: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        // Reset to initia state and turn on loading status
        case 'FETCH_ASSETS': {
            return { ...initialState, loading: true };
        }
        // Fetching was successfull, save assets
        case 'FETCH_ASSETS_SUCCESS': {
            return { ...state, loading: false, data: action.data };
        }
        // Fetching has failed, save error
        case 'FETCH_ASSETS_ERROR': {
            return { ...state, loading: false, error: action.error };
        }
        default: {
            return state;
        }
    }
};
