import styled from 'styled-components'
import { CloseButton } from '../utilities/Buttons'

export const Banner = ({ closeBanner }) => {
  return (
    <Container>
      <Message>
        Get free delivery on orders over $100!
      </Message>
      <CloseButton
        onClick={closeBanner}
      />
    </Container>
  )
}

const Container = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.blue};
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 0.8rem 2rem;

  @media (max-width: 350px) {
    padding: 0.8rem 0.5rem;
  }
`

const Message = styled.p`
  color: #FFFFFF;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
  width: max-content;
`