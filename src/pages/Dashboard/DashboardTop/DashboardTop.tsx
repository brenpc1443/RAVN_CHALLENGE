import { useState } from "react";
import styled, { css } from "styled-components";
import Icon from "ui/Icon";
import DashboardModal from "../DashboardModals";

type DashboardTopType = {
  clickBurger: boolean;
  clickLine: boolean;
};

const DashboardTop = ({ clickBurger, clickLine }: DashboardTopType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClick = () => {
    setModalIsOpen(true);
  };

  const onClose = () => {
    setModalIsOpen(false);
  };

  return (
    <StyledContainer>
      <SwitcherMenu $activeL={clickLine} $activeB={clickBurger}>
        <div className="menu">
          <Icon remixClass="ri-menu-line" />
        </div>
        <div className="menu">
          <Icon remixClass="ri-function-line" />
        </div>
      </SwitcherMenu>
      <ContainerButton>
        <button onClick={handleClick}>
          <Icon remixClass="ri-add-line" />
        </button>
      </ContainerButton>
      {modalIsOpen && (
        <DashboardModal visible={modalIsOpen} onClose={onClose} />
      )}
    </StyledContainer>
  );
};

export default DashboardTop;

const StyledContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SwitcherMenu = styled.div<{
  $activeB: boolean;
  $activeL: boolean;
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu:nth-child(1) {
    ${({ $activeL }) =>
      !!$activeL &&
      css`
        border: 2px solid #da584b;
        i {
          color: #da584b;
        }
      `}
  }

  .menu:nth-child(2) {
    ${({ $activeB }) =>
      !!$activeB &&
      css`
        border: 2px solid #da584b;
        i {
          color: #da584b;
        }
      `}
  }
`;

const ContainerButton = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: #da584b;
    border: 0;
    cursor: pointer;

    i {
      color: white;
    }
  }
`;
