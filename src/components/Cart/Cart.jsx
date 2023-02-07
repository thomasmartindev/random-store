import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../../state/features/cartSlice'
import { CloseButton } from '../utilities/CloseButton'

export const Cart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(state => state.cart.isCartOpen)

  return (
    <>
      <Container
        isCartOpen={isCartOpen}
      >
        <Wrapper>
          <Heading>
            Shopping Bag
          </Heading>
          <CloseButton
            clickHandler={() => dispatch(closeCart())}
          />
        </Wrapper>
        <Text>
          The Shopping Bag is empty.
        </Text>
      </Container>
      <Overlay
        isCartOpen={isCartOpen}
        onClick={() => dispatch(closeCart())}
      />
    </>
  )
}

const Container = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem;
  position: fixed;
  right: ${({ isCartOpen }) => isCartOpen ? '0' : '-110%'};
  top: 0;
  transition: right 0.75s ease-in-out;
  width: 400px;
  z-index: 1;

  @media (max-width: 600px) {
    width: 300px;
  }
`

const Heading = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
`

const Overlay = styled.div`
  background-color: #000000;
  height: 100%;
  left: ${({ isCartOpen }) => isCartOpen ? '0' : '-100%'};
  opacity: 0.6;
  position: fixed;
  top: 0;
  transition: left 0.75s ease-in-out;
  width: 100%;
`

const Text = styled.p`
  font-size: 1.6rem;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5rem;
  width: 100%;
`