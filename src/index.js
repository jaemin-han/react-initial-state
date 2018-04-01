import React from 'react';
import ReactDOM from 'react-dom';

import Address from './components/Address';

ReactDOM.render(
  // <ToggleButton />,
  <Address
    street="Santa Monica Blvd."
    city="Santa Monica"
  />,
  document.getElementById('root')
)
