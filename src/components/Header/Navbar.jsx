import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openCart } from '../../state/features/cartSlice'
import { openMenu } from '../../state/features/isMenuOpenSlice'
import { CartButton, MenuButton } from '../utilities/Buttons'

export const Navbar = () => {
  const dispatch = useDispatch()
  const items = useSelector(state => state.cart.items)

  const sumItems = () => {
    let totalItems = 0

    if (items.length) {
      items.forEach(item => {
        totalItems += item.quantity
      })
    }

    return totalItems
  }

  return (
    <Container>
      <Wrapper>
        <MenuButton
          onClick={() => dispatch(openMenu())}
        />
        <Logo
          to='/random-store'
        >
          RS
        </Logo>
        <StyledLink
          to='/random-store/electronics'
        >
          Electronics
        </StyledLink>
        <StyledLink
          to='/random-store/jewelery'
        >
          Jewelery
        </StyledLink>
        <StyledLink
          to='/random-store/mensclothing'
        >
          Men's Clothing
        </StyledLink>
        <StyledLink
          to='/random-store/womensclothing'
        >
          Women's Clothing
        </StyledLink>
      </Wrapper>
      <CartWrapper
        onClick={() => dispatch(openCart())}
        itemsLength={items.length}
      >
        <CartButton />
        {sumItems()}
      </CartWrapper>
    </Container>
  )
}

const CartWrapper = styled.div`
  align-items: center;
  color: ${({ itemsLength, theme }) => itemsLength ? theme.blue : theme.lightGrey};
  column-gap: 0.5rem;
  cursor: pointer;
  display: flex;
  
  &:hover {
    color: ${({ itemsLength, theme }) => itemsLength ? theme.blueHover : theme.grey};
  }
`

const Container = styled.nav`
  display: flex;
  font-weight: 600;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 6rem;

  @media (max-width: 1024px) {
    padding: 1rem 4rem;
  }

  @media (max-width: 800px) {
    padding: 1rem 2rem;
  }
`

const Logo = styled(Link)`
  color: ${({ theme }) => theme.blue};
  font-family: 'Lobster';
  font-size: 4rem;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.grey};
  font-size: 1.4rem;

  &:hover {
    color: ${({ theme }) => theme.blue};
  }

  @media (max-width: 800px) {
    display: none;
  }
`

const Wrapper = styled.div`
  align-items: center;
  column-gap: 4rem;
  display: flex;

  @media (max-width: 800px) {
    column-gap: 2rem;
  }
`