import Icon from 'components/icon/Icon'
import styled from 'styled-components'
import { SocialNetworkMenu } from 'components/menu/SocialNetworkMenu'

export const Menu = () => {
  return (
    <StyledMenu>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Tech Stack</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contacts</a></li>
        <li><SocialNetworkMenu /></li>
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
  ul:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }
  
  li > a:hover {
    &::after {
      content: '';
      display: block;
      border-top: 2px solid #000;
    }
  }
`
