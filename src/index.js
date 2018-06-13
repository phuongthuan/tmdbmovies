import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import fontawesome from '@fortawesome/fontawesome'
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(faSearch);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
