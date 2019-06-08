import React, { Component } from "react";

/*
  A dataSource is a HOC that gets data and injects it as a
  prop into another component - this could be an adapter or
  a view.

  In this example we're loading some data over the network but
  we could be loading it from Redux, static files, etc.

  The point is that other components don't care where the data
  is coming from.
*/

const peopleDataSource = WrappedComponent => {
  return class extends Component {
    state = {
      people: []
    };

    componentDidMount() {
      window
        .fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(people => this.setState({ people }));
    }
    
    render() {
      return <WrappedComponent people={this.state.people} />;
    }
  };
};

export default peopleDataSource;
