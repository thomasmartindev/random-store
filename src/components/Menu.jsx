import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../state/features/isMenuOpenSlice'
import { CloseButton } from './utilities/CloseButton'

export const Menu = () => {
  const dispatch = useDispatch()
  const isMenuOpen = useSelector(state => state.isMenuOpen.isOpen)

  return (
    <>
      <Container
        isMenuOpen={isMenuOpen}
      >
        <Wrapper>
          <Heading>
            Categories
          </Heading>
          <CloseButton
            clickHandler={() => dispatch(closeMenu())}
          />
        </Wrapper>
        <StyledLink
          onClick={() => dispatch(closeMenu())}
          to='/electronics'
        >
          Electronics
        </StyledLink>
        <StyledLink
          onClick={() => dispatch(closeMenu())}
          to='/jewelery'
        >
          Jewelery
        </StyledLink>
        <StyledLink
          onClick={() => dispatch(closeMenu())}
          to='/men%27s%20clothing'
        >
          Men's Clothing
        </StyledLink>
        <StyledLink
          onClick={() => dispatch(closeMenu())}
          to='/women%27s%20clothing'
        >
          Women's Clothing
        </StyledLink>
      </Container>
      <Overlay
        isMenuOpen={isMenuOpen}
        onClick={() => dispatch(closeMenu())}
      />
    </>
  )
}

const Container = styled.div`
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
  left: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-110%'};
  padding: 2.5rem;
  position: fixed;
  row-gap: 4rem;
  top: 0;
  transition: left 0.75s ease-in-out;
  width: 250px;
  z-index: 1;
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`

const Overlay = styled.div`
  background-color: #000000;
  height: 100%;
  opacity: 0.6;
  position: fixed;
  right: ${({ isMenuOpen }) => isMenuOpen ? '0' : '-100%'};
  top: 0;
  transition: right 0.75s ease-in-out;
  width: 100%;
`

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.blue};
  font-size: 1.6rem;
  font-weight: 600;
  padding-left: 1rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`