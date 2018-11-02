import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import commonModule from './common/commonModule';

window.CF = {
    commonModule,
};

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
