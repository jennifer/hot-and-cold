import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GuessProcessor from './components/guess-processor';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GuessProcessor />, document.getElementById('root'));
registerServiceWorker();
