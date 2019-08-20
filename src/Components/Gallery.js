import React, { Component } from "react";
// This imports the variable apiKey from config.js
import apiKey from "./config";

// This imports the following Components to be displayed
import Photo from "./Photo";
import NotFound from "./NotFound";
import Loading from "./ImagesLoading";

class Gallery extends Component {
  constructor() {
    // This super(); executes the default constructor
    super();

    // This is the default state:  with an empty array of photos
    this.state = {
      photos: [],
      isLoading: true
    };
  }

  fetchPhotos = query => {
    //when loading the page, empty the state variables
    //so the render will show default state while the images load
    this.setState({ photos: [], isLoading: true });

    //same but include specification in extras parameter to request url_o, url_z, url_c - different sizes for the images (when available per image)

    const uri = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&extras=url_o,url_z,url_c&per_page=24&page=1&format=json&nojsoncallback=1`;

    //HTTP GET the URI, convert the response data to JSON, assign the photos state variable and set state isLoading to false, signifying the photos are loaded
    fetch(uri)
      .then(response => response.json())
      .then(responseData => {
        this.setState({ photos: responseData.photos.photo, isLoading: false });
      })
      .catch(error => {
        console.log("Error fetching and parsing data", error);
      });
  };
  // Resources
  // https://www.flickr.com/services/api/misc.urls.html
  // https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js
  

  // This constructs the photo URI for this JSON photo item: using the flickr format, with the Photo Component
  mapJsonToPhotoComponents = (photo, i) => {
    let uri = "";

    uri = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${
      photo.id
    }_${photo.secret}.jpg`;
    return <Photo src={uri} key={i} />;
  };

  // This waits for the Gallery component to fully loads/mount to run "fetchPhotos" to get the photos for params 'type'
  componentDidMount() {
    this.fetchPhotos(this.props.match.params.type);
  }

  // This runs if this page route has changed and will fetch the photos for that new query type
  componentDidUpdate(prevProps) {
    if (this.props.location.key !== prevProps.location.key) {
      this.fetchPhotos(this.props.match.params.type);
    }
  }

  // Renders the image element into the DOM return a reference to the component
  render() {
    let images = [];
    let content = "";

    // This will display the name if the photos aren't loading
    if (!this.state.isLoading) {
      content = "Displaying " + this.props.match.params.type;
    }
    // This will display if the photos array has content
    if (this.state.photos.length > 0) {
      images = this.state.photos.map(this.mapJsonToPhotoComponents);
    }
    // This will load "NotFound" if there are no photos in the array, and the isLoading is false
    else if (!this.state.isLoading) {
      images = <NotFound />;
    }
    // Otherwise this will display the default Loading panel
    else {
      images = <Loading />;
    }
    // This will render the photo-container with the images and content
    return (
      <div className="photo-container">
        <h2>{content}</h2>
        <ul>{images}</ul>
      </div>
    );
  }
}

export default Gallery;
