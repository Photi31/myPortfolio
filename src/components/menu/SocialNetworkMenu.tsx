import React from "react";
import styled from "styled-components";
import Icon from "components/icon/Icon";

export const SocialNetworkMenu = () => {
  return (
    <StyledSocialNetworkMenu>
      <a href="#">
        <Icon iconId="github" width="30" height="30" viewBox="0 0 30 30" />
      </a>
      <a href="#">
        <Icon iconId="telegram" />
      </a>
      <a href="#">
        <Icon iconId="whatsapp" width="30" height="30" viewBox="0 0 30 30" fill="none" />
      </a>
    </StyledSocialNetworkMenu>
  );
};

const StyledSocialNetworkMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  a:hover {
    color: blue;
  }
`;
