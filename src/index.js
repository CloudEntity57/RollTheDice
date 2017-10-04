import React from 'react';
import ReactDom from 'react-dom';

const root = document.createElement('div');
document.body.append(root);
const App = () => (<div>HI</div>);

ReactDom.render(<App />, root);
