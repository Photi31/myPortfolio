import styled from "styled-components";
import { ReactNode } from "react";

type LinkPropsType = {
  children: ReactNode;
  href: string;
};

export const Link = ({ children, href }: LinkPropsType) => {
  return <StyledLink href={href}>{children}</StyledLink>;
};

const StyledLink = styled.a`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: aqua;
  }
`;
