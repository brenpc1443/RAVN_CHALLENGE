import styled, { css } from "styled-components";

type IconProps = React.HTMLAttributes<HTMLDivElement> & {
  remixClass: string;
  size?: number;
  className?: string;
};

const Icon: React.FC<IconProps> = ({
  remixClass,
  className,
  size = 20,
  ...rest
}) => {
  return (
    <StyledIcon {...rest} size={size}>
      <i className={`${remixClass} ${className}`} />
    </StyledIcon>
  );
};

export default Icon;

const StyledIcon = styled.div<{
  size: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ size }) => css`
    width: ${size}px;
    height: ${size}px;
    font-size: ${size}px;
  `}
`;
