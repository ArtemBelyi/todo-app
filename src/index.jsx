import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  state = {
    /* todoData: [
      { description: 'Eat breakfast', id: 1, isCompleted: false },
      { description: 'Learn JavaScript', id: 2, isCompleted: false },
      { description: 'Reading book', id: 3, isCompleted: false },
      { description: 'Reading book Star Wars', id: 4, isCompleted: false },
    ], */
    filter: 'All',
  };

  render() {
    const { filter } = this.state;
    return <div className="todoapp">{filter}</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
