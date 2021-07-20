const express = require('express'); // call express
const cors = require('cors')
const app = express(); // define our app using 
const {getPhotosByAlbumId, returnTitleAndThumbnail} = require('./helpers/getPhotos');

const PORT = process.env.PORT || 5000;
app.use(cors())
 
app.get('/albums/:id/photos', function (req, res) {

  try {
    let albumId = req.params.id;
    let albumPhotos = getPhotosByAlbumId(albumId);
    let formatedPhotos = returnTitleAndThumbnail(albumPhotos)
  
    res.json({formatedPhotos})
  
  } catch (error) {
    res.send(error)
  }

})
 
app.listen(PORT);
