let allPhotos = require('../model/photos');

const getPhotosByAlbumId = (id) => {

    // 	Creates a new array with every element in an array 
    // that has the same id as the one passed in
    let albumPhotos = allPhotos.filter(photo => photo.albumId == id);
    if (albumPhotos) return albumPhotos;
    else return null;
}

const returnTitleAndThumbnail = (albumPhotos) => {
    return albumPhotos.map(photo => {
        return {
            title: photo.title,
            thumbnailUrl: photo.thumbnailUrl
        }
    });

}


module.exports = {getPhotosByAlbumId, returnTitleAndThumbnail};
