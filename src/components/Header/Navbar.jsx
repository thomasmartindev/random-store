import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { openCart } from '../../state/features/cartSlice'
import { openMenu } from '../../state/features/isMenuOpenSlice'

export const Navbar = () => {
  const dispatch = useDispatch()

  return (
    <Container>
      <Wrapper>
        <MenuButton
          onClick={() => dispatch(openMenu())}
        />
        <Logo
          to='/'
        >
          RS
        </Logo>
        <StyledLink
          to='/electronics'
        >
          Electronics
        </StyledLink>
        <StyledLink
          to='/jewelery'
        >
          Jewelery
        </StyledLink>
        <StyledLink
          to='/men%27s%20clothing'
        >
          Men's Clothing
        </StyledLink>
        <StyledLink
          to='/women%27s%20clothing'
        >
          Women's Clothing
        </StyledLink>
      </Wrapper>
      <CartWrapper
        onClick={() => dispatch(openCart())}
      >
        <HiOutlineShoppingBag
          size='25px'
        />
        0
      </CartWrapper>
    </Container>
  )
}

const CartWrapper = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.lightGrey};
  column-gap: 0.5rem;
  cursor: pointer;
  display: flex;
  
  &:hover {
    color: ${({ theme }) => theme.grey};
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

const MenuButton = styled(RxHamburgerMenu)`
  color: ${({ theme }) => theme.lightGrey};
  cursor: pointer;
  height: 25px;
  width: 25px;

  &:hover {
    color: ${({ theme }) => theme.grey};
  }

  @media (min-width: 800px) {
    display: none;
  }
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