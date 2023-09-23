import React, { useState } from 'react';
import Menu from './menucard';
import AddJobListing from './addjoblisting';
import MenuList from './menulist'

function Test() {
  const [menu, setMenu] = useState(Menu);

  const addJobListing = (newJobListing) => {
    setMenu([...menu, newJobListing]);
  };

  return (
    <div className="App">
      <AddJobListing onAddJobListing={addJobListing} />
      <hr />
      <MenuList menu={menu} />
    </div>
  );
}

export default Test;
