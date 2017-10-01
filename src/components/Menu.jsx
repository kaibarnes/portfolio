import React from 'react';
import MediaQuery from 'react-responsive';

import MenuFrame from './MenuFrame';
import MenuBar from './MenuBar';

const Menu = props => (
  <nav>
    {/* Changes which menu component is rendered depending on the screen size */}
    <MediaQuery query="(max-width: 767px)">
      <MenuBar history={props.history} />
    </MediaQuery>
    <MediaQuery query="(min-width: 768px)">
      <MenuFrame history={props.history} />
    </MediaQuery>
  </nav>
);

export default Menu;
