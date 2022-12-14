// import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import { GalleryList } from 'components/ImageGallery/ImageGalleryList/ImageGalleryListStyled';

export default function ImageGallery({ images, onClick }) {
    const elements = images.map(({ id, largeImageURL, webformatURL, tags }) => <ImageGalleryItem
        key={id}
        src={webformatURL}
        modalURL={largeImageURL}
        alt={tags}
        onClickImg={onClick} />)

    return (
        <GalleryList> {elements} </GalleryList>
    )
}

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         largeImageURL: PropTypes.string,
//         webformatURL: PropTypes.string,
//         tags: PropTypes.string,
//     }))
// }
