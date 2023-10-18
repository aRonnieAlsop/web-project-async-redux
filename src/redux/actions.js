import axios from 'axios'

export const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST'
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS'
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE'

export const fetchImageRequest = () => ({
    type: FETCH_IMAGE_REQUEST,
})

export const fetchImageSuccess = (imgaeURL) => ({
    type: FETCH_IMAGE_SUCCESS,
    payload: imgaeURL,
})

export const fetchImageFailure = (error) => ({
    type: FETCH_IMAGE_FAILURE,
    payload: error,
})

export const fetchImage = (apiKey) => {
    return (dispatch) => {
        dispatch(fetchImageRequest())
        axios   
            .get('https://api.unsplash.com/photos/random', {
                params: {
                    client_id: apiKey,
                }
    })
    .then((response) => {
        const imageURL = response.data.urls.regular
        dispatch(fetchImageSuccess(imageURL))
    })
    .catch((error) => {
        dispatch(fetchImageFailure(error.message))
    })
}
}