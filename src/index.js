import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome'
import { faSearch, faArrowRight, faArrowLeft, faStar, faSearchPlus } from '@fortawesome/fontawesome-free-solid';

import App from './app/containers/App/App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(faSearch, faArrowRight, faArrowLeft, faStar, faSearchPlus);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
