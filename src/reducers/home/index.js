import _ from 'lodash'
import {
    FETCH_OFFERS,
    OFFERS_RECEIVED
} from '../../constants/actionTypes';

const initialState = {
    loading: false,
    offers: []
};

const reducer = (state = initialState, action) => {
    let newState = _.cloneDeep(state);
    
    switch(action.type) {
        case FETCH_OFFERS:
            newState.loading = true
            return newState
        case OFFERS_RECEIVED:
            newState.offers = action.offers
            newState.loading = false
            return newState
        default:
            return state;
    }
};

export default reducer;