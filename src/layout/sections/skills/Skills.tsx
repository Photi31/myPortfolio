import { FlexWrapper } from "components/FlexWrapper";
import { Typography } from "components/Typography";
import styled from "styled-components";
import Icon from "components/icon/Icon";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper direction="column" align="center">
        <Typography as="h2" variant="h2" mt="150px">
          My Tech Stack
        </Typography>
        <Typography variant="subtitle" mt="50px">
          {" "}
          Technologies I’ve been working with recently
        </Typography>
        <FlexWrapper align="center" justify="center" wrap="wrap" gap="70px 100px" mt="140px">
          <Icon iconId={"ts"} width="120px" height="120px" viewBox="0 0 24 24" />
          <Icon iconId={"react"} width="120px" height="120px" viewBox="0 0 48 48" />
          <Icon iconId={"redux"} width="120px" height="120px" viewBox="0 0 108 108" />
          <Icon iconId={"js"} width="120px" height="120px" viewBox="0 0 110 110" />
          <Icon iconId={"html"} width="120px" height="120px" viewBox="0 0 114 114" />
          <Icon iconId={"css"} width="120px" height="120px" viewBox="0 0 114 114" />
          <Icon iconId={"sass"} width="120px" height="120px" viewBox="0 0 96 96" />
          <Icon iconId={"styledComponent"} width="120px" height="120px" viewBox="0 0 30 30" />
          <Icon iconId={"jest"} width="120px" height="120px" viewBox="0 0 120 120" />
          <Icon iconId={"storybook"} width="120px" height="120px" viewBox="0 0 24 24" />
          <Icon iconId={"git"} width="120px" height="120px" viewBox="0 0 108 108" />
          <Icon iconId={"github"} width="120px" height="120px" viewBox="0 0 30 30" />
          <Icon iconId={"mui"} width="120px" height="80px" viewBox="0 0 600 480" />
          <Icon iconId={"radix"} width="110px" height="120px" viewBox="0 0 24 24" />
          <Icon iconId={"figma"} width="110px" height="120px" viewBox="0 0 24 24" />
        </FlexWrapper>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: blueviolet;
`;
