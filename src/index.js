import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import YKRouter from './Page/Router';


ReactDOM.render(<YKRouter ></YKRouter>,document.getElementById('root'));

serviceWorker.unregister();
