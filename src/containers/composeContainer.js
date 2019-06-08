// This is a utility that composes the container component

function composeContainer({ dataSource, adapter, view}) {
  return dataSource(adapter(view));
}

export default composeContainer;