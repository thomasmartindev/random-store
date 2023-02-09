import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { closeCart } from '../../state/features/cartSlice'
import { BlueButton, CloseButton, TextButton } from '../utilities/Buttons'
import { CartItem } from './CartItem'

export const Cart = () => {
  const dispatch = useDispatch()
  const isCartOpen = useSelector(state => state.cart.isCartOpen)
  const items = useSelector(state => state.cart.items)

  const sumTotal = () => {
    let subtotal = 0

    items.forEach(item => {
      subtotal += item.price * item.quantity
    })

    return subtotal
  }

  return (
    <>
      <Container
        isCartOpen={isCartOpen}
      >
        <Wrapper>
          <Heading>
            Shopping Cart
          </Heading>
          <CloseButton
            onClick={() => dispatch(closeCart())}
          />
        </Wrapper>
        {
          items.length 
            ? <CartItems>
                {
                  items.map(item =>
                    <CartItem
                      id={item.id}
                      image={item.image}
                      key={item.id}
                      price={item.price}
                      quantity={item.quantity}
                      title={item.title}
                    />
                  )
                }
              </CartItems>
            : <Text>
                The Shopping Cart is empty.
              </Text>
        }
        {
          items.length 
            ? <Checkout>
                <Subtotal>
                  <p>
                    Subtotal
                  </p>
                  <p>
                    ${sumTotal().toFixed(2)}
                  </p>
                </Subtotal>
                <p>
                  Shipping and taxes calculated at checkout.
                </p>
                <BlueButton>
                  Checkout
                </BlueButton>
                <TextButton
                  onClick={() => dispatch(closeCart())}
                >
                  Continue Shopping
                </TextButton>
              </Checkout>
            : null
        }
      </Container>
      <Overlay
        isCartOpen={isCartOpen}
        onClick={() => dispatch(closeCart())}
      />
    </>
  )
}

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  row-gap: 2rem;
  width: 100%;
`

const Checkout = styled.div`
  color: ${({ theme }) => theme.grey};
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  padding-top: 5rem;
  row-gap: 2rem;
  width: 100%;

  @media (max-width: 600px) {
    padding-top: 2.5rem;
    row-gap: 1rem;
  }
`

const Container = styled.div`
  align-items: center;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 2.5rem 2.5rem 5rem;
  position: fixed;
  right: ${({ isCartOpen }) => isCartOpen ? '0' : '-110%'};
  top: 0;
  transition: right 0.75s ease-in-out;
  width: 400px;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 2.5rem;
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

const Subtotal = styled.div`
  color: #000000;
  display: flex;
  font-size: 1.6rem;
  font-weight: 600;
  justify-content: space-between;
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