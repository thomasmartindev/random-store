import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../state/features/cartSlice'
import { TextButton } from '../utilities/Buttons'

export const CartItem = ({
  id,
  image,
  price,
  quantity,
  title
}) => {
  const dispatch = useDispatch()

  const formatTitle = title => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...'
  }

  return (
    <Container>
      <ImageWrapper>
        <Image
          alt={title}
          src={image}
        />
      </ImageWrapper>
      <DetailsContainer>
        <Details>
          <Title>
            {formatTitle(title)}
          </Title>
          <div>
            ${price.toFixed(2)}
          </div>
        </Details>
        <Details>
          <Quantity>
            Qty {quantity}
          </Quantity>
          <TextButton
            onClick={() => dispatch(removeFromCart(id))}
          >
            Remove
          </TextButton>
        </Details>
      </DetailsContainer>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  padding-bottom: 2rem;
`

const Details = styled.div`
  column-gap: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  width: 100%;
`

const DetailsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 1.6rem;
  justify-content: space-between;
  row-gap: 4rem;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 1.4rem;
  }
`

const Image = styled.img`
  width: 10rem;

  @media (max-width: 600px) {
    width: 7rem;
  }
`

const ImageWrapper = styled.div`
  width: 50%;
`

const Quantity = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 1.4rem;
`

const Title = styled.p`
  font-weight: 600;
  height: 5rem;
  overflow: hidden;

  @media (max-width: 600px) {
    height: 6rem;
  }
`