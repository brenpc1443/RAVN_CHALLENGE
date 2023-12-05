import { Outlet } from "react-router-dom";
import Menu from "components/Menu";

const MenuLayout = () => {
  return (
    <Menu>
      <Outlet />
    </Menu>
  );
};

export default MenuLayout;
