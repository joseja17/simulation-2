import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
// import './index.css';
import App from './App';
import store from './store';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>

, document.getElementById('root'));
// registerServiceWorker();
