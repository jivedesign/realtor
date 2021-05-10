import React from 'react';
import ReactDOM from 'react-dom';
import Container from './Container.jsx';
import data from './data.js';

ReactDOM.render(<Container sampleData={data} />, document.getElementById('root'));