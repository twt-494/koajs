import React from 'react';
import { connect } from 'react-redux';

const App = ({ developers }) => (
  <div>
    <ul>
      {
            developers.data.map(({ name }) => <li>{name}</li>)
        }
    </ul>
  </div>
);

export default connect(({developers}) => ({developers}))(App);