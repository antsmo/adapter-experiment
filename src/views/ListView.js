import React from 'react'

// Views are basic components that take some props and render
// UI elements. These could be composed of other views.
const ListView = ({ items }) => (
  <ul>
    {items.map((item, i) => (
      <li key={i}>{item.title}</li>
    ))}
  </ul>
);

export default ListView;