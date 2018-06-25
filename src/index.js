import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFilm, faTv, faCalendarAlt, faSearch, faArrowAltCircleRight, faArrowAltCircleLeft, faStar, faSearchPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './app/containers/App/App';
import registerServiceWorker from './registerServiceWorker';

library.add(fab, faFilm, faTv, faCalendarAlt, faSearch, faArrowAltCircleRight, faArrowAltCircleLeft, faStar, faSearchPlus, faUser);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
