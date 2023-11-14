import { ReactNode } from "react";
import styled from "styled-components";

type IconWrapperType = {
  width: string;
  id?: string;
  children?: ReactNode;
};

export const IconWrapper = ({ width, children, id }: IconWrapperType) => {
  return (
    <StyledIconWrapper width={width} id={id}>
      {" "}
      {children}
    </StyledIconWrapper>
  );
};

const StyledIconWrapper = styled.div<{ width: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "50px"};
  height: ${(props) => props.width || "50px"};
  border-radius: 50%;
  background-color: #12141c;
  transition: all 300ms ease-out;

  &:hover {
    box-shadow: 1px 1px 15px #6ae1e1;

    svg {
      transform: scale(1.03);
    }
  }
`;
