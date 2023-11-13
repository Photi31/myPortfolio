import styled from "styled-components";
import { theme } from "styles/Theme.styled";

type TypographyType = {
  variant?: VariantType;
  aline?: string;
  mt?: string;
};

export const Typography = styled.span<TypographyType>`
  display: block;
  color: ${theme.color.primary || "#CCC"};
  text-align: ${(props) => props.aline || "start"};
  margin-top: ${(props) => props.mt || "0"};
  ${({ variant }) => HandleVariantType(variant || "caption")}
`;

const HandleVariantType = (variant: VariantType) => {
  switch (variant) {
    case "large":
      return `font-size: ${theme.fontSize.xl}; font-weight: ${theme.fontWeight.bold}; line-height: ${theme.lineHeight.l};`;
    case "h1":
      return `font-size: ${theme.fontSize.xl}; font-weight: ${theme.fontWeight.medium}; line-height: ${theme.lineHeight.l};`;
    case "h2":
      return `font-size: ${theme.fontSize.l}; font-weight: ${theme.fontWeight.bold}; line-height: ${theme.lineHeight.m};`;
    case "h3":
      return `font-size: ${theme.fontSize.s}; font-weight: ${theme.fontWeight.bold}; line-height: ${theme.lineHeight.m};`;
    case "subtitle":
      return `font-size: ${theme.fontSize.m}; font-weight: ${theme.fontWeight.regular}; line-height: ${theme.lineHeight.m};`;
    case "body1":
      return `font-size: ${theme.fontSize.xs}; font-weight: ${theme.fontWeight.regular}; line-height: ${theme.lineHeight.m};`;
    case "body2":
      return `font-size: ${theme.fontSize.xxs}; font-weight: ${theme.fontWeight.regular}; line-height: ${theme.lineHeight.m};`;
    case "caption":
      return `font-size: ${theme.fontSize.xs}; font-weight: ${theme.fontWeight.light}; line-height: ${theme.lineHeight.m};`;
    case "link":
      return `font-size: ${theme.fontSize.xxs}; font-weight: ${theme.fontWeight.regular}; line-height: ${theme.lineHeight.m}; text-decoration-line: underline`;
    case "error":
      return `font-size: ${theme.fontSize.xxs}; font-weight: ${theme.fontWeight.regular}; line-height: ${
        theme.lineHeight.m
      }; color: ${theme.color.error || "#f23d61"}`;
    default:
      return `font-size: ${theme.fontSize.xs}; font-weight: ${theme.fontWeight.regular}; line-height: ${theme.lineHeight.m};`;
  }
};

type VariantType = "large" | "h1" | "h2" | "h3" | "body1" | "body2" | "subtitle" | "caption" | "link" | "error";
