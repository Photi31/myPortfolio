import styled from "styled-components";
import { FlexWrapper } from "components/FlexWrapper";
import photo from "./../../../assets/images/photo.webp";
import Icon from "components/icon/Icon";
import { Typography } from "components/Typography";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify="spase-around" align="center">
        <div>
          <Typography variant="subtitle">Welcome</Typography>
          <Typography variant="large">I’m Svetlana Nemova</Typography>
          <Typography as="h1" variant="h3">
            A Frontend Developer
          </Typography>
        </div>
        <PhotoBlock>
          <Photo src={photo} alt="Photo" />
          <Icon iconId={"abstract"} width="628" height="628" fill="none" viewBox="0 0 628 628" />
        </PhotoBlock>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  padding: 50px 0;
  background-color: #12125d;
  position: relative;
  min-height: 630px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhotoBlock = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 630px;
  height: 630px;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
`;

const Photo = styled.img`
  width: 250px;
  height: 300px;
  object-fit: contain;
  z-index: 2;
`;
