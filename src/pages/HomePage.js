import React from 'react'
import PeopleListContainer from '../containers/PeopleListContainer';
import HeaderView from '../views/HeaderView';

const HomePage = () => (
  <>
    <HeaderView title="Home" />
    <PeopleListContainer />
  </>
)

export default HomePage;