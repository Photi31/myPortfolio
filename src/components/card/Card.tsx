import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import { Typography } from "components/Typography";
import Icon from "components/icon/Icon";
import { Link } from "components/Link";

type CardType = {
  img: string;
  alt: string;
  title: string;
  description?: string;
  techStack?: string;
  liveHref?: string;
  gitHref?: string;
};

export const Card = ({ img, alt, title, description, techStack, liveHref = "#", gitHref = "#" }: CardType) => {
  return (
    <StyledCard>
      <img src={img} alt={alt} />
      <DescriptionSection>
        <FlexWrapper direction={"column"}>
          <Typography variant="subtitle1">{title}</Typography>
          <Typography variant="caption1" mt="18px">
            {description}
          </Typography>
          <FlexWrapper gap={"5px"} align={"end"}>
            <Typography variant={"body2"}>Tech stack : </Typography>
            <Typography as={"p"} variant={"caption2"}>
              {techStack}
            </Typography>
          </FlexWrapper>
          <FlexWrapper gap={"50px"} mt={"20px"}>
            <Link href={liveHref}>
              <Icon iconId={"anchor"} width={"20px"} height={"20px"} viewBox={"0 0 20 20"} />
              <Typography variant={"link"}>Live Preview</Typography>
            </Link>
            <Link href={gitHref}>
              <Icon iconId={"github"} width={"20px"} height={"20px"} viewBox={"0 0 32 32"} />
              <Typography variant={"link"}>View Code</Typography>
            </Link>
          </FlexWrapper>
        </FlexWrapper>
      </DescriptionSection>
    </StyledCard>
  );
};

const StyledCard = styled.figure`
  margin-top: 110px;
  max-width: 365px;
  min-height: 400px;
  border-radius: 20px;
  background: #363636;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }
`;

const DescriptionSection = styled.figcaption`
  padding: 25px 30px;
`;
