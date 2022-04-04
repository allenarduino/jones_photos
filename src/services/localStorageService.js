export const addToStorage = (photo, photos) => {
  if (!localStorage['favourites']) {
    photos.push(photo);
    localStorage.setItem('favourites', JSON.stringify(photos));
  } else {
    let photos = JSON.parse(localStorage.getItem('favourites'));
    photos.push(photo);
    localStorage.removeItem('favourites');
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

export const checkItem = (id) => {
  if (localStorage['favourites']) {
    const favouriteItems = JSON.parse(localStorage.getItem('favourites'));
    const exists = favouriteItems.find((item) => item.id === id);
    if (exists) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
