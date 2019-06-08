import React, { Component } from 'react'

/*
  An adapter is a HOC that transforms a prop injected by a dataSource HOC
  and passes them down to a view component.
*/

const peopleListAdapter = (View) => {
  return class extends Component {
    render() {
      const { people } = this.props;
      const items = people.map(person => ({
        title: person.name
      }));  
      return <View items={items} />
    }
  }
}

export default peopleListAdapter;