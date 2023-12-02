import { useState } from "react";
import styled from "styled-components";
import Icon from "ui/Icon";

const DashboardSearch = () => {
  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <StyledContainer>
      <div className="searchBar">
        <Icon remixClass="ri-search-line" />
        <StyledInput
          placeholder="Search"
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="profileBar">
        <Icon remixClass="ri-notification-3-line" />
        <div className="img" />
      </div>
    </StyledContainer>
  );
};

export default DashboardSearch;

const StyledContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  padding: 0 10px;
  background-color: #2c2f33;

  .searchBar {
    width: 80%;
    display: flex;
  }

  .profileBar {
    width: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .img {
      width: 25px;
      height: 25px;
      background-image: url("https://picsum.photos/25/25?random");
      border-radius: 50%;
    }
  }

  i {
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 90%;
  margin-left: 20px;
  background-color: #2c2f33;
  color: white;
`;
