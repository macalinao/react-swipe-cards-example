import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';

import SwipeCards from 'react-swipe-cards';


const App = React.createClass({

  componentDidMount() {
  },

  render() {
    return (
      <div style={{ width: 300, margin: '0px auto' }}>
        <SwipeCards width={300} height={500} cards={this.props.cards} />
      </div>
    );
  }

});

$.get('/cards', (data) => {
  ReactDOM.render(
    <App cards={data.data} />,
    document.getElementById('reactContainer')
  );
});

