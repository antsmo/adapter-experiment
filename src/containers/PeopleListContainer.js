import composeContainer from "./composeContainer";
import peopleDataSource from "../dataSources/peopleDataSource";
import peopleListAdapter from "../adapters/peopleListAdapter";
import ListView from "../views/ListView";

/*
  Containers are the "glue" that compose dataSources, adapters
  and views. This is where all of the dependencies are imported.

  The composable nature of React and how we've structured our
  components means that all we need to create a container is a
  configuration object.
*/

const PeopleListContainer = composeContainer({
  dataSource: peopleDataSource,
  adapter: peopleListAdapter,
  view: ListView
});

export default PeopleListContainer;