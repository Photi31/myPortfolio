import styled from 'styled-components'
import { Menu } from 'components/menu/Menu'
import {Logo} from "components/logo/Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo/>
      <Menu />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  background-color: aquamarine;
  height: 60px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
