import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import { Typography } from "components/Typography";
import { Card } from "components/card/Card";
import todo from "../../../assets/images/todolist.webp";
import social from "../../../assets/images/socialNetwork-1.webp";
import flashCards from "../../../assets/images//flashCards.webp";

export const Projects = () => {
  return (
    <StyledProjects>
      <FlexWrapper direction="column" justify="center" align="center">
        <Typography as="h2" variant={"h2"} mt="150px">
          Projects
        </Typography>
        <Typography variant={"subtitle1"} mt="50px">
          Things I’ve built so far
        </Typography>
      </FlexWrapper>
      <FlexWrapper gap={"50px"} align={"center"} justify={"center"}>
        <Card
          img={todo}
          alt={"todolist"}
          title={"Todolist"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum\n" +
            "            generator for dummy content"
          }
          techStack={"HTML , JavaScript, SASS, React"}
        />
        <Card
          img={social}
          alt={"social network"}
          title={"Social network"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum\n" +
            "            generator for dummy content"
          }
          techStack={"HTML , JavaScript, SASS, React"}
        />
        <Card
          img={flashCards}
          alt={"flash card"}
          title={"Flash cards"}
          description={
            "This is sample project description random things are here in description This is sample project lorem ipsum\n" +
            "            generator for dummy content"
          }
          techStack={"HTML , JavaScript, SASS, React"}
        />
      </FlexWrapper>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  background-color: #099b09;
`;
