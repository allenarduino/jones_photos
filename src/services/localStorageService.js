export const addToStorage = (photo, photos) => {
  if (!localStorage['favourites']) {
    photos.push(photo);
    localStorage.setItem('favourites', JSON.stringify(photos));
  } else {
    let photos = JSON.parse(localStorage.getItem('mycart'));
    photos.push(photo);
    localStorage.setItem('favourites', JSON.stringify(photos));
  }
};

export const removeFromStorage = (photo) => {
  if (localStorage['favourites']) {
    let photos = JSON.parse(localStorage.getItem('favourites'));
    const index = photos.findIndex((item) => item.id === photo.id);
    photos.splice(index, 1);
    localStorage.setItem('favourites', JSON.stringify(photos));
  }
};

export const fetchFromStorage = () => {
  if (localStorage['favourites']) {
    let photos = JSON.parse(localStorage.getItem('favourites'));
    return photos;
  }
};
