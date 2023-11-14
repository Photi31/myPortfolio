import styled from "styled-components";
import { Icon } from "components/icon/Icon";

export const Logo = () => {
  return (
    <StyledLogo>
      <Icon width="256" height="26" viewBox="0 0 128 13" iconId={"logo"} />
    </StyledLogo>
  );
};

const StyledLogo = styled.a``;
