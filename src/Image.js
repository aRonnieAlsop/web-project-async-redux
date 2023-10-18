import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchImage } from './redux/actions'

const Image = ({ fetchImage, imageURL, loading, error }) => {
    useEffect(() => {
        const apiKey = 'SgN9BrP2RmVITahitJiL9E9L7u8-b5zyF78mwpkEn0A'
        fetchImage(apiKey)
    }, [fetchImage])

    return (
        <div className='image-container'>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {imageURL && <img src={imageURL} alt="Random" />}
        </div>
    )
}

const mapStateToProps = (state) => ({
    imageURL: state.imageURL,
    loading: state.loading,
    error: state.error,
})

export default connect(mapStateToProps, { fetchImage })(Image)