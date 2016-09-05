import React from 'react';
import {render} from 'react-dom';
import App from './Components/App';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

render(
  <App/>,
  document.getElementById('container')
);
