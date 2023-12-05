import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { useLocation } from "react-router-dom";
import styled, { css } from "styled-components";
import RAVN_logo from "../../shared/assets/RAVN_logo.svg";
import Icon from "ui/Icon";
import DashboardSearch from "pages/Dashboard/DashboardSearch";
import DashboardTop from "pages/Dashboard/DashboardTop";
import { useDashContext } from "shared/context/Context";
import { GET_USERS, GET_PROFILE } from "shared/services/characterQueries";

type MenuProps = {
  children: JSX.Element;
};

const Menu = ({ children }: MenuProps) => {
  const {
    Users: { setUsers },
    Profile: { setProfile },
  } = useDashContext();

  useQuery(GET_USERS, {
    onCompleted: (data) => {
      setUsers(data.users ?? []);
    },
  });

  useQuery(GET_PROFILE, {
    onCompleted: (data) => {
      setProfile(data.profile ?? []);
    },
  });

  const location = useLocation();
  const currentPath = location.pathname;

  const [clickBurger, setClickBurger] = useState(false);
  const [clickLine, setClickLine] = useState(false);

  const handleClickLine = () => {
    setClickLine(true);
    setClickBurger(false);
  };

  const handleClickBurger = () => {
    setClickBurger(true);
    setClickLine(false);
  };

  useEffect(() => {
    switch (currentPath) {
      case "/burger":
        setClickBurger(true);
        break;
      case "/line":
        setClickLine(true);
        break;
      default:
        setClickBurger(false);
        setClickLine(false);
    }
  }, [currentPath]);

  return (
    <StyledContainer>
      <StyledMenu>
        <section className="menu_sidebar">
          <img
            className="menu_sidebar_logo"
            src={RAVN_logo}
            alt="LOGO DE RAVN"
            width="40px"
            height="40px"
          />
          <div className="menu_sidebar_actions">
            <Link to="/burger" className="link" onClick={handleClickBurger}>
              <SidebarActionsBtn $click={clickBurger}>
                <Icon remixClass="ri-function-line" />
                <p>DASHBOARD</p>
              </SidebarActionsBtn>
            </Link>
            <Link to="/line" className="link" onClick={handleClickLine}>
              <SidebarActionsBtn $click={clickLine}>
                <Icon remixClass="ri-menu-line" />
                <p>MY TASK</p>
              </SidebarActionsBtn>
            </Link>
          </div>
        </section>
        <section className="menu_frame">
          <DashboardSearch />
          <DashboardTop clickBurger={clickBurger} clickLine={clickLine} />
          <StyledConteinerTasks>{children}</StyledConteinerTasks>
        </section>
      </StyledMenu>
    </StyledContainer>
  );
};

export default Menu;

const StyledContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledMenu = styled.div`
  width: 80%;
  height: 88vh;
  display: flex;
  justify-content: space-between;

  .menu_sidebar {
    width: 230px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 12px;
    background-color: #2c2f33;
    border-radius: 26px;
  }

  .menu_sidebar_actions {
    width: 100%;
    height: 90px;
    margin-top: 40px;
    padding-left: 20px;
  }

  .menu_frame {
    width: calc(100% - 262px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
`;

const SidebarActionsBtn = styled.div<{
  $click: boolean;
}>`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  i {
    ${({ $click }) =>
      !!$click &&
      css`
        color: #da584b;
      `}
  }

  p {
    height: 100%;
    width: calc(90% - 20px);
    display: flex;
    align-items: center;
    justify-content: start;
    color: #94979a;

    ${({ $click }) =>
      !!$click &&
      css`
        border-right: 3px #da584b solid;
        background: linear-gradient(
          90deg,
          rgba(186, 37, 37, 0) 0%,
          rgba(210, 77, 77, 0.1) 100%
        );
        color: #da584b;
      `}
  }
`;

const StyledConteinerTasks = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
