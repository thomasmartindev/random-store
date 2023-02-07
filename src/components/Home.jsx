import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import heroFaded from '../assets/hero-faded.png'

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <MessageWrapper>
          <Heading>
            Winter styles are finally here
          </Heading>
          <Description>
            This year, our new winter collection will 
            protect you from the harsh elements of the 
            world while keeping you stylish.
          </Description>
          <Button>
            Shop Now
          </Button>
        </MessageWrapper>
        <Image
          alt='image'
          src={hero}
        />
      </Wrapper>
    </Container>
  )
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.blue};
  border: none;
  border-radius: 5px;
  color: #FFFFFF;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 1.5rem 3.5rem;
  width: max-content;

  &:hover {
    background-color: ${({ theme }) => theme.blueHover};
  }

  @media (max-width: 1024px) {
    font-size: 1.8rem;
    padding: 1.5rem 10rem;
  }

  @media (max-width: 400px) {
    padding: 1.2rem 8rem;
  }
`

const Container = styled.div`
  @media (max-width: 1024px) {
    background-image: url(${heroFaded});
    background-position: center;
    background-size: cover;
    height: 100vh;
  }
`

const Description = styled.p`
  color: ${({ theme }) => theme.grey};
  font-size: 1.8rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 1024px) {
    color: #000000;
    font-weight: 600;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`

const Heading = styled.div`
  font-family: 'Unbounded';
  font-size: 5.5rem;
  line-height: 1.2;

  @media (max-width: 400px) {
    font-size: 4rem;
  }
`

const Image = styled.img`
  animation: fadeIn ease 2s;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
              rgba(0, 0, 0, 0.22) 0px 10px 10px;
  height: 600px;
  object-fit: cover;
  width: 600px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 1200px) {
    height: 500px;
    width: 500px;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  max-width: 400px;
  row-gap: 2rem;

  @media (max-width: 1100px) {
    max-width: 340px;
  }

  @media (max-width: 1024px) {
    align-items: center;
    flex-shrink: 1;
    margin-top: 8rem;
    max-width: 600px;
    row-gap: 3rem;
    text-align: center;
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 6rem;

  @media (max-width: 1024px) {
    justify-content: center;
    padding: 6rem 4rem;
  }

  @media (max-width: 600px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 500px) {
    padding: 0rem 2rem;
  }
`