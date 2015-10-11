import React from 'react';
import ReactDOM from 'react-dom';

import SwipeCards from 'react-swipe-cards';

const App = React.createClass({
  render() {
    return <SwipeCards />;
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('reactContainer')
);
