import React from 'react'
import styled from 'styled-components'
import Icon from 'components/icon/Icon'

export const SocialNetworkMenu = () => {
  return (
    <StyledSocialNetworkMenu>
      <ul>
        <li>
          <a href="#">
            <Icon iconId="email" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconId="telegram" />
          </a>
        </li>
        <li>
          <a href="#">
            <Icon iconId="email" />
          </a>
        </li>
      </ul>
    </StyledSocialNetworkMenu>
  )
}

const StyledSocialNetworkMenu = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`
