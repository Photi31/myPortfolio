import styled from "styled-components";

type FlexWrapperPropsType = {
  direction?: string;
  justify?: string;
  align?: string;
  wrap?: string;
  gap?: string;
  mt?: string;
  width?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  margin-top: ${(props) => props.mt || "0"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  gap: ${(props) => props.gap || "0"};
  min-width: ${(props) => props.width || "100%"};
`;
