import { FlexWrapper } from "components/FlexWrapper";
import { Typography } from "components/Typography";
import styled from "styled-components";
import { Icon } from "components/icon/Icon";
import { IconWrapper } from "components/icon/IconWrapper";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper direction="column" align="center">
        <Typography as="h2" variant="h2" mt="150px">
          My Tech Stack
        </Typography>
        <Typography variant="subtitle2" mt="50px">
          {" "}
          Technologies I’ve been working with recently
        </Typography>
        <FlexWrapper align="center" justify="center" wrap="wrap" gap="50px 30px" mt="140px">
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"ts"} width="60px" height="60px" viewBox="0 0 24 24" fill={"#2f79d0"} />
            </IconWrapper>
            <Typography variant={"body1"}>TypeScript</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"react"} width="70px" height="70px" viewBox="0 0 48 48" />
            </IconWrapper>
            <Typography variant={"body1"}>React</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"redux"} width="70px" height="70px" viewBox="0 0 108 108" />
            </IconWrapper>
            <Typography variant={"body1"}>Redux / Redux toolkit</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"js"} width="60px" height="60px" viewBox="0 0 110 110" />
            </IconWrapper>
            <Typography variant={"body1"}>JavaScript</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"html"} width="60px" height="60px" viewBox="0 0 114 114" />
            </IconWrapper>
            <Typography variant={"body1"}>HTML</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"css"} width="60px" height="60px" viewBox="0 0 114 114" />
            </IconWrapper>
            <Typography variant={"body1"}>CSS</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"sass"} width="60px" height="60px" viewBox="0 0 96 96" />
            </IconWrapper>
            <Typography variant={"body1"}>SASS</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"styledComponent"} width="60px" height="60px" viewBox="0 0 30 30" />
            </IconWrapper>
            <Typography variant={"body1"}>Styled component</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"jest"} width="60px" height="60px" viewBox="0 0 120 120" />
            </IconWrapper>
            <Typography variant={"body1"}>Jest</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"storybook"} width="60px" height="60px" viewBox="0 0 24 24" />
            </IconWrapper>
            <Typography variant={"body1"}>Storybook</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"git"} width="60px" height="60px" viewBox="0 0 108 108" />
            </IconWrapper>
            <Typography variant={"body1"}>Git</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"github"} width="60px" height="60px" viewBox="0 0 30 30" fill={"white"} />
            </IconWrapper>
            <Typography variant={"body1"}>GitHub</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"mui"} width="60px" height="40px" viewBox="0 0 600 480" />
            </IconWrapper>
            <Typography variant={"body1"}>Material UI</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"radix"} width="50px" height="50px" viewBox="0 0 24 24" />
            </IconWrapper>
            <Typography variant={"body1"}>Radix</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"}>
              <Icon iconId={"figma"} width="50px" height="50px" viewBox="0 0 24 24" />
            </IconWrapper>
            <Typography variant={"body1"}>Figma</Typography>
          </FlexWrapper>
          <FlexWrapper width={"170px"} direction={"column"} align={"center"} gap={"20px"}>
            <IconWrapper width={"110px"} id={"reactHookForm"}>
              <Icon iconId={"reactHookForm"} width="50px" height="50px" viewBox="0 0 24 24" />
            </IconWrapper>
            <Typography variant={"body1"}>React hook form</Typography>
          </FlexWrapper>
        </FlexWrapper>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  background-color: #020319;
  div + div:hover {
    span {
      color: #6ae1e1;
    }
  }

  #reactHookForm {
    position: relative;

    svg {
      z-index: 2;
      color: white;
    }

    &::before {
      position: absolute;
      content: "";
      width: 60px;
      height: 65px;
      border-radius: 15px;
      display: block;
      background-color: #ec5990;
      z-index: 1;
    }

    &:hover::before {
      transform: scale(1.03);
    }
  }
`;
