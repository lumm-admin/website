import { useState } from 'react';

const NavbarLogic = () => {
  const [drawerOpened, setDrawerOpened] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpened(open);
  };

  return { drawerOpened, toggleDrawer };
};

export default NavbarLogic;
