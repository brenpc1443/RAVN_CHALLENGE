import styled from "styled-components";
import Icon from "ui/Icon";

type sizeTag = "small" | "medium";

type TagProps = {
  title: string;
  color: string;
  placeIcon?: string;
  size?: sizeTag;
};

const Tag = ({ title, color, placeIcon, size = "small" }: TagProps) => {
  return (
    <StyledContainer className="UI_TAG" color={color} size={size}>
      {placeIcon && (
        <Icon remixClass={placeIcon} size={size === "medium" ? 20 : 15} />
      )}
      <p>{title}</p>
    </StyledContainer>
  );
};

export default Tag;

interface StyledContainerProps {
  color: string;
  size: sizeTag;
}

const StyledContainer = styled.div<StyledContainerProps>`
  height: ${(props) => (props.size === "small" ? "20px" : "28px")};
  min-width: ${(props) => (props.size === "small" ? "80px" : "90px")};
  max-width: 150px;
  padding: 0 8px;
  margin-right: 3px;
  display: flex;
  justify-content: ${(props) =>
    props.size === "small" ? "space-bweteen" : "space-around"};
  align-items: center;
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => `${props.color}1a`};
  white-space: nowrap;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
    text-align: center;
    margin-left: 5px;
    font-size: ${(props) => (props.size === "small" ? "10px" : "14px")};
  }

  i {
    color: ${(props) => props.color};
  }
`;
