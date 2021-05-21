import React, { Component } from 'react';
import axios from 'axios';

const list = [
  {
    "id": 1,
    "title": "1 Todo",
    "body": "1 Todo body"
  },
  {
    "id": 2,
    "title": "2 Todo",
    "body": "2 Todo body"
  },
  {
    "id": 3,
    "title": "3 Todo",
    "body": "3 Todo body"
  }
]


class App extends Component {

  state = {
    todos: []
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    axios
      .get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({ todos: res.data });
      })
      . catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.body}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;