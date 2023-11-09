import React from 'react'
import styled from 'styled-components'
import Icon from 'components/icon/Icon'

export const SocialNetworkMenu = () => {
  return (
    <StyledSocialNetworkMenu>
      <a href="#">
        <Icon iconId="github" />
      </a>
      <a href="#">
        <Icon iconId="telegram" />
      </a>
      <a href="#">
        <Icon iconId="email" />
      </a>
    </StyledSocialNetworkMenu>
  )
}

const StyledSocialNetworkMenu = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
  
  a:hover {
    color: blue;
  }
`
