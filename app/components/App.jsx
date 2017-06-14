import React from 'react';
import Header from './Header';
import List from './List';

let DATA = [
  'The Third Man',
  'The Holy Mountain',
  'Badlands',
  'Lawrence of Arabia',
  'Glengarry Glen Ross',
  'El Topo',
  'THe Good, the Bad, and the Ugly'
];

export default class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Header title="Films" />
        <List items={DATA} delay="1.2" />
      </div>
    );
  }
}
