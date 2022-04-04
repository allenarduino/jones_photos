import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PhotoContext from './contexts/PhotoContextProvider';
import FavouritesContext from './contexts/FavouriteContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <PhotoContext>
      <FavouritesContext>
        <App />
      </FavouritesContext>
    </PhotoContext>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
