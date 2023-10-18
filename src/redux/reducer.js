import {
    FETCH_IMAGE_REQUEST,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_FAILURE,
} from './actions'

const initialState = {
    loading: false,
    imageURL: '',
    error: '',
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST:
            return {
                ...state,
                loading: true, 
            }
        case FETCH_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                imageURL: action.payload,
                error: '',
            }
        case FETCH_IMAGE_FAILURE:
            return {
                ...state,
                loading: false,
                imageURL: '',
                error: action.payload,
            }
        default: 
            return StaticRange
    }
}

export default reducer