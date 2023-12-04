import styled from "styled-components";
import Icon from "ui/Icon";

type TagProps = {
  title: string;
  color: string;
  placeIcon?: string;
};

const Tag = ({ title, color, placeIcon }: TagProps) => {
  return (
    <StyledContainer color={color}>
      {placeIcon && <Icon remixClass={placeIcon} size={15} />}
      <p>{title}</p>
    </StyledContainer>
  );
};

export default Tag;

const StyledContainer = styled.div`
  height: 20px;
  max-width: auto;
  min-width: 80px;
  padding: 0 8px;
  margin-right: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => `${props.color}1a`};

  i{
    color: ${(props) => props.color};
  }
`;
