import styled from 'styled-components'
import { Menu } from 'components/menu/Menu'

export const Header = () => {
  return (
    <StyledHeader>
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
`
