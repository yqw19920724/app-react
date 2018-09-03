import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ehome from './ehome/ehome';


ehome.ehomeInit();
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
