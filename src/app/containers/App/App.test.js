import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import { faSearch, faArrowRight, faArrowLeft } from '@fortawesome/fontawesome-free-solid';

import App from './App';

fontawesome.library.add(faSearch, faArrowRight, faArrowLeft);


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
      , div);
  ReactDOM.unmountComponentAtNode(div);
});
