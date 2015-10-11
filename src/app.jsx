import React from 'react';
import ReactDOM from 'react-dom';

import SwipeCards from 'react-swipe-cards';

const App = React.createClass({

  render() {

    let cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push({
        name: 'Test',
        age: 18,
        friends: 3,
        moments: 3,
        picture: 'https://avatars3.githubusercontent.com/u/401263?v=3&s=460'
      });
    }

    return (
      <div style={{ width: 300, margin: '0px auto' }}>
        <SwipeCards width={300} height={500} cards={cards} />
      </div>
    );

  }

});

ReactDOM.render(
  <App />,
  document.getElementById('reactContainer')
);
