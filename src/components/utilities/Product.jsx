import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../state/features/cartSlice'
import { AddToCartButton } from './Buttons'

export const Product = ({
  id,
  image,
  price,
  title
}) => {
  const dispatch = useDispatch()

  const item = {
    id,
    image,
    price,
    quantity: 1,
    title
  }

  return (
    <Container>
      <Wrapper>
        <Image
          src={image} 
          alt={title}
        />
      </Wrapper>
      <Details>
        <Info>
          <Title>
            {title}
          </Title>
          <div>
            ${price.toFixed(2)}
          </div>
        </Info>
        <AddToCartButton
          onClick={() => dispatch(addToCart(item))}
        >
          Add to cart
        </AddToCartButton>
      </Details>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.border};
`

const Image = styled.img`
  display: block;
  height: 100%;
  width: 100%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`

const Title = styled.p`
  font-weight: 600;

  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
`

const Wrapper = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`